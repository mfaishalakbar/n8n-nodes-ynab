import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['transaction'], operation: ['getAll'] };

export const transactionGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: showFor },
		options: [
			{
				displayName: 'Since Date',
				name: 'since_date',
				type: 'dateTime',
				default: '',
				description:
					'Only return transactions on or after this date (ISO format: YYYY-MM-DD)',
				routing: {
					request: {
						qs: {
							since_date: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{ name: 'All', value: '' },
					{ name: 'Uncategorized', value: 'uncategorized' },
					{ name: 'Unapproved', value: 'unapproved' },
				],
				default: '',
				description: 'Filter transactions by type',
				routing: {
					request: {
						qs: {
							type: '={{$value || undefined}}',
						},
					},
				},
			},
			{
				displayName: 'Last Knowledge of Server',
				name: 'last_knowledge_of_server',
				type: 'number',
				default: 0,
				description: 'The starting server knowledge for delta requests',
				routing: {
					request: {
						qs: {
							last_knowledge_of_server: '={{$value || undefined}}',
						},
					},
				},
			},
		],
	},
];
