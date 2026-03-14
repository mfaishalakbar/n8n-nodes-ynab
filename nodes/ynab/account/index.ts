import type { INodeProperties } from 'n8n-workflow';
import { extractResponse } from '../shared/postReceive';
import { accountGetAllDescription } from './getAll';
import { accountGetDescription } from './get';
import { accountCreateDescription } from './create';

const showFor = { resource: ['account'] };

export const accountDescription: INodeProperties[] = [
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
				action: 'Get many accounts',
				description: 'Returns many accounts for a budget',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/accounts',
					},
					output: {
						postReceive: [extractResponse('accounts')],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an account',
				description: 'Returns a single account',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/accounts/{{$parameter.accountId}}',
					},
					output: {
						postReceive: [extractResponse('account')],
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create an account',
				description: 'Creates a new account',
				routing: {
					request: {
						method: 'POST',
						url: '=/plans/{{$parameter.planId}}/accounts',
					},
					output: {
						postReceive: [extractResponse('account')],
					},
				},
			},
		],
		default: 'getAll',
	},
	...accountGetAllDescription,
	...accountGetDescription,
	...accountCreateDescription,
];
