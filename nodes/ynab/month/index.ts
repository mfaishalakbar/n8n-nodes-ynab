import type { INodeProperties } from 'n8n-workflow';
import { extractResponse } from '../shared/postReceive';
import { monthGetAllDescription } from './getAll';
import { monthGetDescription } from './get';

const showFor = { resource: ['month'] };

export const monthDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showFor },
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many budget months',
				description: 'Returns many budget months',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/months',
					},
					output: {
						postReceive: [extractResponse('months')],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a budget month',
				description: 'Returns a single budget month with all its categories',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/months/{{$parameter.month}}',
					},
					output: {
						postReceive: [extractResponse('month')],
					},
				},
			},
		],
		default: 'getAll',
	},
	...monthGetAllDescription,
	...monthGetDescription,
];
