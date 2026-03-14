import type { INodeProperties } from 'n8n-workflow';
import { extractResponse } from '../shared/postReceive';

export const userDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['user'] },
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get the current user',
				description: 'Returns information about the authenticated user',
				routing: {
					request: {
						method: 'GET',
						url: '/user',
					},
					output: {
						postReceive: [extractResponse('user')],
					},
				},
			},
		],
		default: 'get',
	},
];
