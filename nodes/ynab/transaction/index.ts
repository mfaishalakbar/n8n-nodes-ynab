import type { INodeProperties } from 'n8n-workflow';
import { extractResponse } from '../shared/postReceive';
import { transactionGetAllDescription } from './getAll';
import { transactionGetDescription } from './get';
import { transactionCreateDescription } from './create';
import { transactionUpdateDescription } from './update';
import { transactionUpdateManyDescription } from './updateMany';
import { transactionDeleteDescription } from './delete';
import { transactionImportDescription } from './import';

const showFor = { resource: ['transaction'] };

export const transactionDescription: INodeProperties[] = [
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
				action: 'Get many transactions',
				description: 'Returns many transactions for a budget',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/transactions',
					},
					output: {
						postReceive: [extractResponse('transactions')],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a transaction',
				description: 'Returns a single transaction',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/transactions/{{$parameter.transactionId}}',
					},
					output: {
						postReceive: [extractResponse('transaction')],
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a transaction',
				description: 'Creates a new transaction',
				routing: {
					request: {
						method: 'POST',
						url: '=/plans/{{$parameter.planId}}/transactions',
					},
					output: {
						postReceive: [extractResponse('transaction')],
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a transaction',
				description: 'Updates a single transaction',
				routing: {
					request: {
						method: 'PUT',
						url: '=/plans/{{$parameter.planId}}/transactions/{{$parameter.transactionId}}',
					},
					output: {
						postReceive: [extractResponse('transaction')],
					},
				},
			},
			{
				name: 'Update Many',
				value: 'updateMany',
				action: 'Update multiple transactions',
				description: 'Updates multiple transactions by ID or import ID',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/plans/{{$parameter.planId}}/transactions',
					},
					output: {
						postReceive: [extractResponse('transactions')],
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a transaction',
				description: 'Deletes a single transaction',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/plans/{{$parameter.planId}}/transactions/{{$parameter.transactionId}}',
					},
					output: {
						postReceive: [extractResponse('transaction')],
					},
				},
			},
			{
				name: 'Import',
				value: 'import',
				action: 'Import transactions',
				description: 'Imports available transactions on all linked accounts for a budget',
				routing: {
					request: {
						method: 'POST',
						url: '=/plans/{{$parameter.planId}}/transactions/import',
					},
					output: {
						postReceive: [extractResponse('transaction_ids')],
					},
				},
			},
		],
		default: 'getAll',
	},
	...transactionGetAllDescription,
	...transactionGetDescription,
	...transactionCreateDescription,
	...transactionUpdateDescription,
	...transactionUpdateManyDescription,
	...transactionDeleteDescription,
	...transactionImportDescription,
];
