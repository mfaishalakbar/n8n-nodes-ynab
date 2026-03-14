import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['account'], operation: ['create'] };

export const accountCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'accountName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The name of the account',
		routing: {
			send: {
				type: 'body',
				property: 'account.name',
			},
		},
	},
	{
		displayName: 'Type',
		name: 'accountType',
		type: 'options',
		required: true,
		default: 'checking',
		displayOptions: { show: showFor },
		description: 'The type of the account',
		options: [
			{ name: 'Auto Loan', value: 'autoLoan' },
			{ name: 'Cash', value: 'cash' },
			{ name: 'Checking', value: 'checking' },
			{ name: 'Credit Card', value: 'creditCard' },
			{ name: 'Line of Credit', value: 'lineOfCredit' },
			{ name: 'Medical Debt', value: 'medicalDebt' },
			{ name: 'Mortgage', value: 'mortgage' },
			{ name: 'Other Asset', value: 'otherAsset' },
			{ name: 'Other Debt', value: 'otherDebt' },
			{ name: 'Other Liability', value: 'otherLiability' },
			{ name: 'Personal Loan', value: 'personalLoan' },
			{ name: 'Savings', value: 'savings' },
			{ name: 'Student Loan', value: 'studentLoan' },
		],
		routing: {
			send: {
				type: 'body',
				property: 'account.type',
			},
		},
	},
	{
		displayName: 'Balance',
		name: 'accountBalance',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show: showFor },
		description:
			'The current balance of the account in milliunits (e.g. 10000 = $10.00)',
		routing: {
			send: {
				type: 'body',
				property: 'account.balance',
			},
		},
	},
];
