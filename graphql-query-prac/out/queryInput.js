"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const vscode_1 = require("vscode");
function showInputBoxMine() {
    return __awaiter(this, void 0, void 0, function* () {
        let urlStr;
        let queryStr;
        let variables;
        urlStr = yield vscode_1.window.showInputBox({
            placeHolder: "Select your API End-point",
            validateInput: text => {
                return text.startsWith("http") ? null : "Type your API End-Point with 'http'";
            },
        });
        queryStr = yield vscode_1.window.showInputBox({
            value: getSelectedText(vscode_1.window.activeTextEditor),
            placeHolder: "Select your Query",
            validateInput: text => {
                text = getSelectedText(vscode_1.window.activeTextEditor);
                return text.startsWith("query") ? null : "Type your query with 'query'";
            }
        });
        variables = yield vscode_1.window.showInputBox({
            placeHolder: "Select your Variable",
            validateInput: text => {
                text = getSelectedText(vscode_1.window.activeTextEditor);
                return (text.startsWith("{")) ? null : "Type your variable!";
            }
        });
        return new Array(urlStr, queryStr, variables);
    });
}
exports.showInputBoxMine = showInputBoxMine;
function getSelectedText(editor) {
    let str = '';
    if (editor) {
        str = (editor.document.getText(new vscode.Range(editor.selections[0].start.line, editor.selections[0].start.character, editor.selections[0].end.line, editor.selections[0].end.character)));
    }
    return str;
}
//# sourceMappingURL=queryInput.js.map