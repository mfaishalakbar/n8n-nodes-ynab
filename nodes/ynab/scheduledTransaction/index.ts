import type { INodeProperties } from 'n8n-workflow';
import { extractResponse } from '../shared/postReceive';
import { scheduledTransactionGetAllDescription } from './getAll';
import { scheduledTransactionGetDescription } from './get';
import { scheduledTransactionCreateDescription } from './create';
import { scheduledTransactionUpdateDescription } from './update';
import { scheduledTransactionDeleteDescription } from './delete';

const showFor = { resource: ['scheduledTransaction'] };

export const scheduledTransactionDescription: INodeProperties[] = [
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
				action: 'Get many scheduled transactions',
				description: 'Returns many scheduled transactions for a budget',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/scheduled_transactions',
					},
					output: {
						postReceive: [extractResponse('scheduled_transactions')],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a scheduled transaction',
				description: 'Returns a single scheduled transaction',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/scheduled_transactions/{{$parameter.scheduledTransactionId}}',
					},
					output: {
						postReceive: [extractResponse('scheduled_transaction')],
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a scheduled transaction',
				description: 'Creates a new scheduled transaction',
				routing: {
					request: {
						method: 'POST',
						url: '=/plans/{{$parameter.planId}}/scheduled_transactions',
					},
					output: {
						postReceive: [extractResponse('scheduled_transaction')],
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a scheduled transaction',
				description: 'Updates an existing scheduled transaction',
				routing: {
					request: {
						method: 'PUT',
						url: '=/plans/{{$parameter.planId}}/scheduled_transactions/{{$parameter.scheduledTransactionId}}',
					},
					output: {
						postReceive: [extractResponse('scheduled_transaction')],
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a scheduled transaction',
				description: 'Deletes a scheduled transaction',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/plans/{{$parameter.planId}}/scheduled_transactions/{{$parameter.scheduledTransactionId}}',
					},
					output: {
						postReceive: [extractResponse('scheduled_transaction')],
					},
				},
			},
		],
		default: 'getAll',
	},
	...scheduledTransactionGetAllDescription,
	...scheduledTransactionGetDescription,
	...scheduledTransactionCreateDescription,
	...scheduledTransactionUpdateDescription,
	...scheduledTransactionDeleteDescription,
];
