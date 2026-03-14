import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { planIdField } from './shared/descriptions';
import { userDescription } from './user';
import { planDescription } from './plan';
import { accountDescription } from './account';
import { categoryDescription } from './category';
import { payeeDescription } from './payee';
import { payeeLocationDescription } from './payeeLocation';
import { monthDescription } from './month';
import { moneyMovementDescription } from './moneyMovement';
import { transactionDescription } from './transaction';
import { scheduledTransactionDescription } from './scheduledTransaction';

export class Ynab implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'YNAB',
		name: 'ynab',
		icon: 'file:../../icons/ynab.svg',
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the YNAB budgeting API',
		defaults: {
			name: 'YNAB',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'ynabApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.ynab.com/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Account', value: 'account' },
					{ name: 'Category', value: 'category' },
					{ name: 'Money Movement', value: 'moneyMovement' },
					{ name: 'Month', value: 'month' },
					{ name: 'Payee', value: 'payee' },
					{ name: 'Payee Location', value: 'payeeLocation' },
					{ name: 'Plan', value: 'plan' },
					{ name: 'Scheduled Transaction', value: 'scheduledTransaction' },
					{ name: 'Transaction', value: 'transaction' },
					{ name: 'User', value: 'user' },
				],
				default: 'transaction',
			},
			{
				...planIdField,
				displayOptions: {
					hide: {
						resource: ['user', 'plan'],
					},
				},
			},
			{
				...planIdField,
				displayOptions: {
					show: {
						resource: ['plan'],
						operation: ['get', 'getSettings'],
					},
				},
			},
			...userDescription,
			...planDescription,
			...accountDescription,
			...categoryDescription,
			...payeeDescription,
			...payeeLocationDescription,
			...monthDescription,
			...moneyMovementDescription,
			...transactionDescription,
			...scheduledTransactionDescription,
		],
	};
}
