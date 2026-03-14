import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['transaction'], operation: ['updateMany'] };

export const transactionUpdateManyDescription: INodeProperties[] = [
	{
		displayName: 'Transactions',
		name: 'transactions',
		type: 'json',
		required: true,
		default: '[]',
		displayOptions: { show: showFor },
		description: 'An array of transaction objects to update. Each must include an "ID" or "import_id" field plus any fields to update.',
		routing: {
			send: {
				type: 'body',
				property: 'transactions',
			},
		},
	},
];
