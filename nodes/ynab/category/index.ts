import type { INodeProperties } from 'n8n-workflow';
import { extractResponse } from '../shared/postReceive';
import { categoryGetAllDescription } from './getAll';
import { categoryGetDescription } from './get';
import { categoryCreateDescription } from './create';
import { categoryUpdateDescription } from './update';
import { categoryGetForMonthDescription } from './getForMonth';
import { categoryUpdateForMonthDescription } from './updateForMonth';
import { categoryCreateGroupDescription } from './createGroup';
import { categoryUpdateGroupDescription } from './updateGroup';

const showFor = { resource: ['category'] };

export const categoryDescription: INodeProperties[] = [
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
				action: 'Get many categories',
				description: 'Returns many categories grouped by category group',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/categories',
					},
					output: {
						postReceive: [extractResponse('category_groups')],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a category',
				description: 'Returns a single category',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/categories/{{$parameter.categoryId}}',
					},
					output: {
						postReceive: [extractResponse('category')],
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a category',
				description: 'Creates a new category in a category group',
				routing: {
					request: {
						method: 'POST',
						url: '=/plans/{{$parameter.planId}}/categories',
					},
					output: {
						postReceive: [extractResponse('category')],
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a category',
				description: 'Updates an existing category',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/plans/{{$parameter.planId}}/categories/{{$parameter.categoryId}}',
					},
					output: {
						postReceive: [extractResponse('category')],
					},
				},
			},
			{
				name: 'Get for Month',
				value: 'getForMonth',
				action: 'Get a category for a specific month',
				description: 'Returns a single category for a specific budget month',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/months/{{$parameter.month}}/categories/{{$parameter.categoryId}}',
					},
					output: {
						postReceive: [extractResponse('category')],
					},
				},
			},
			{
				name: 'Update for Month',
				value: 'updateForMonth',
				action: 'Update a category for a specific month',
				description: 'Updates the budgeted amount for a category in a specific month',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/plans/{{$parameter.planId}}/months/{{$parameter.month}}/categories/{{$parameter.categoryId}}',
					},
					output: {
						postReceive: [extractResponse('category')],
					},
				},
			},
			{
				name: 'Create Group',
				value: 'createGroup',
				action: 'Create a category group',
				description: 'Creates a new category group',
				routing: {
					request: {
						method: 'POST',
						url: '=/plans/{{$parameter.planId}}/category_groups',
					},
					output: {
						postReceive: [extractResponse('category_group')],
					},
				},
			},
			{
				name: 'Update Group',
				value: 'updateGroup',
				action: 'Update a category group',
				description: 'Updates an existing category group',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/plans/{{$parameter.planId}}/category_groups/{{$parameter.categoryGroupId}}',
					},
					output: {
						postReceive: [extractResponse('category_group')],
					},
				},
			},
		],
		default: 'getAll',
	},
	...categoryGetAllDescription,
	...categoryGetDescription,
	...categoryCreateDescription,
	...categoryUpdateDescription,
	...categoryGetForMonthDescription,
	...categoryUpdateForMonthDescription,
	...categoryCreateGroupDescription,
	...categoryUpdateGroupDescription,
];
