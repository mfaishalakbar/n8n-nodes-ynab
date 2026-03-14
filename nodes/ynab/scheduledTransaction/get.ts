import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['scheduledTransaction'], operation: ['get'] };

export const scheduledTransactionGetDescription: INodeProperties[] = [
	{
		displayName: 'Scheduled Transaction ID',
		name: 'scheduledTransactionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the scheduled transaction',
	},
];
