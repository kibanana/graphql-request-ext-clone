/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { window } from 'vscode';

export async function showInputBoxMine() {
	let urlStr;
	let queryStr;
	let variables;

	urlStr = await window.showInputBox({
		placeHolder: "Select your API End-point",
		validateInput: text => {
			return text.startsWith("http") ? null : "Type your API End-Point with 'http'";
        },
    });
    
	queryStr = await window.showInputBox({
        value: getSelectedText(window.activeTextEditor),
		placeHolder: "Select your Query",
		validateInput: function(text: string) : any {
			return text.startsWith("query") ? null : "Type your query with 'query'";
		}
    });
    
	variables = await window.showInputBox({
        value: getSelectedText(window.activeTextEditor),
		placeHolder: "Select your Variable",
		validateInput: function(vText: string) : any {
			return vText.startsWith("{") && vText.endsWith("}") ? null : "Type your variable";
		},
	});
	
    return new Array(urlStr, queryStr, variables);
}

let cnt = 0;
function getSelectedText(editor: vscode.TextEditor | undefined): string {
    let str = '';
    if(editor) {
		str = (editor.document.getText(new vscode.Range(
			editor.selections[cnt].start.line,
			editor.selections[cnt].start.character,
			editor.selections[cnt].end.line, 
			editor.selections[cnt].end.character)));
	}
	cnt ++;
    return str;
}