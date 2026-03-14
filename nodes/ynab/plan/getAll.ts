import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['plan'], operation: ['getAll'] };

export const planGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Include Accounts',
		name: 'includeAccounts',
		type: 'boolean',
		default: false,
		displayOptions: { show: showFor },
		description: 'Whether to include account details in the response',
		routing: {
			request: {
				qs: {
					include_accounts: '={{$value}}',
				},
			},
		},
	},
];
