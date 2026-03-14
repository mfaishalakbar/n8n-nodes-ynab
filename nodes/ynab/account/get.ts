import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['account'], operation: ['get'] };

export const accountGetDescription: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the account',
	},
];
