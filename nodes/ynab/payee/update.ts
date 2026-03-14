import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['payee'], operation: ['update'] };

export const payeeUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Payee ID',
		name: 'payeeId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the payee to update',
	},
	{
		displayName: 'Name',
		name: 'payeeName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The new name for the payee',
		routing: {
			send: {
				type: 'body',
				property: 'payee.name',
			},
		},
	},
];
