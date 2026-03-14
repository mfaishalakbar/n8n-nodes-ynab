import type { INodeProperties } from 'n8n-workflow';
import { extractResponse } from '../shared/postReceive';
import { payeeLocationGetAllDescription } from './getAll';
import { payeeLocationGetDescription } from './get';
import { payeeLocationGetByPayeeDescription } from './getByPayee';

const showFor = { resource: ['payeeLocation'] };

export const payeeLocationDescription: INodeProperties[] = [
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
				action: 'Get many payee locations',
				description: 'Returns many payee locations for a budget',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/payee_locations',
					},
					output: {
						postReceive: [extractResponse('payee_locations')],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a payee location',
				description: 'Returns a single payee location',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/payee_locations/{{$parameter.payeeLocationId}}',
					},
					output: {
						postReceive: [extractResponse('payee_location')],
					},
				},
			},
			{
				name: 'Get by Payee',
				value: 'getByPayee',
				action: 'Get all locations for a payee',
				description: 'Returns all payee locations for a specific payee',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/payees/{{$parameter.payeeId}}/payee_locations',
					},
					output: {
						postReceive: [extractResponse('payee_locations')],
					},
				},
			},
		],
		default: 'getAll',
	},
	...payeeLocationGetAllDescription,
	...payeeLocationGetDescription,
	...payeeLocationGetByPayeeDescription,
];
