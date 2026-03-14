import type { INodeProperties } from 'n8n-workflow';
import { extractResponse } from '../shared/postReceive';
import { payeeGetAllDescription } from './getAll';
import { payeeGetDescription } from './get';
import { payeeUpdateDescription } from './update';

const showFor = { resource: ['payee'] };

export const payeeDescription: INodeProperties[] = [
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
				action: 'Get many payees',
				description: 'Returns many payees for a budget',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/payees',
					},
					output: {
						postReceive: [extractResponse('payees')],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a payee',
				description: 'Returns a single payee',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/payees/{{$parameter.payeeId}}',
					},
					output: {
						postReceive: [extractResponse('payee')],
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a payee',
				description: "Updates a payee's name",
				routing: {
					request: {
						method: 'PATCH',
						url: '=/plans/{{$parameter.planId}}/payees/{{$parameter.payeeId}}',
					},
					output: {
						postReceive: [extractResponse('payee')],
					},
				},
			},
		],
		default: 'getAll',
	},
	...payeeGetAllDescription,
	...payeeGetDescription,
	...payeeUpdateDescription,
];
