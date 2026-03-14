import type { INodeProperties } from 'n8n-workflow';
import { extractResponse } from '../shared/postReceive';
import { planGetAllDescription } from './getAll';
import { planGetDescription } from './get';
import { planGetSettingsDescription } from './getSettings';

const showFor = { resource: ['plan'] };

export const planDescription: INodeProperties[] = [
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
				action: 'Get many budgets',
				description: 'Returns a list of many budgets',
				routing: {
					request: {
						method: 'GET',
						url: '/plans',
					},
					output: {
						postReceive: [extractResponse('plans')],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a budget',
				description: 'Returns a single budget with all related entities',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}',
					},
					output: {
						postReceive: [extractResponse('plan')],
					},
				},
			},
			{
				name: 'Get Settings',
				value: 'getSettings',
				action: 'Get budget settings',
				description: 'Returns settings for a budget',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/settings',
					},
					output: {
						postReceive: [extractResponse('settings')],
					},
				},
			},
		],
		default: 'getAll',
	},
	...planGetAllDescription,
	...planGetDescription,
	...planGetSettingsDescription,
];
