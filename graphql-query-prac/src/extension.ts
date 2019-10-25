import * as vscode from 'vscode';
import { showInputBoxMine } from './queryInput';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('extension.helloGraphQL', async () => {
		const options: {[key: string]: (context: vscode.ExtensionContext) => Promise<void>} = {
			showInputBoxMine
		};
		const quickPick = vscode.window.createQuickPick();
		quickPick.items = Object.keys(options).map(label => ({label}));
		quickPick.onDidChangeSelection(selection => {
			if(selection[0]) {
				options[selection[0].label](context)
				.catch(console.error);
			}
		});
		quickPick.onDidHide(() => quickPick.dispose());
		quickPick.show();
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {}