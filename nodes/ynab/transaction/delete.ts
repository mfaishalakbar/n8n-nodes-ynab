import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['transaction'], operation: ['delete'] };

export const transactionDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Transaction ID',
		name: 'transactionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the transaction to delete',
	},
];
