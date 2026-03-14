import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['scheduledTransaction'], operation: ['getAll'] };

export const scheduledTransactionGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Last Knowledge of Server',
		name: 'lastKnowledgeOfServer',
		type: 'number',
		default: 0,
		displayOptions: { show: showFor },
		description:
			'The starting server knowledge for delta requests. If provided, only entities that have changed since this value will be returned.',
		routing: {
			request: {
				qs: {
					last_knowledge_of_server: '={{$value || undefined}}',
				},
			},
		},
	},
];
