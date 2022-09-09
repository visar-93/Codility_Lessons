import { render } from 'ejs/ejs.min.js';
import { getSvgDefTemplate, stylesheet } from '../svg-renderer-sytles';
import { Observable, of } from 'rxjs';
import { commonHeader, mailHeader, mailTitle } from '../common/common-templates';
import { ISVGReceipt, ISVGMessage } from '../common/svg.receipt.interfaces';
import { MessageText } from './message.templates';

export class SvgMessageReceipt implements ISVGReceipt {

    constructor(private readonly data: ISVGMessage) { }

    public getTemplates(): Observable<Array<string>> {
        const templates: Array<string> = [];
        templates.push(mailHeader);
        templates.push(mailTitle);
        templates.push(commonHeader);
        templates.push(MessageText);

        let receiptHeight = 0;
        this.data.messageText = this.prepareText(this.data.messageText, 40);
        this.data.title = this.prepareText(this.data.title, 22);

        const svgContent: string = render(templates.join(''), { ...this.data, setHeight: (h: number) => receiptHeight = h });
        return of([getSvgDefTemplate(receiptHeight, this.data.paperWidth), stylesheet, svgContent, '</svg>']);
    }

    private prepareText(text: Array<string>, devide: number) { // receives as argumens an arrawy with Strings and Devide parameter
        debugger;
        const result = []; // results will be stored in an array, each character will be a single array element

        text?.forEach(tx => { // checks if string argument exists then loops over it
            if (!tx.includes('\n') && tx.length > devide) { // if there is no new line and the strings length is greater than devide which means it can be performed division
                while (tx.length) { // while first element exists (has length greater than 0 )
                    tx = tx.trim(); // remove white spaces
                    const line = tx.substr(0, devide).trim(); // substring from the begining of string 
                    if (tx.length <= devide || tx.charAt(devide) === ' ') { 
                        result.push(line);
                        tx = tx.substr(devide + 1);
                    } else {
                        const lastSpace = line.lastIndexOf(' ');
                        if (lastSpace > 0) {
                            result.push(tx.substr(0, lastSpace).trim());
                            tx = tx.substr(lastSpace);
                        } else {
                            result.push(line);
                            tx = tx.substr(devide);
                        }
                    }
                }
            } else {
                result.push(tx);
            }
        })

        return result;
    }
}
