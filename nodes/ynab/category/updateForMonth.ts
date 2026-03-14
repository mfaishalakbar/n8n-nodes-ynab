import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['category'], operation: ['updateForMonth'] };

export const categoryUpdateForMonthDescription: INodeProperties[] = [
	{
		displayName: 'Month',
		name: 'month',
		type: 'string',
		required: true,
		default: 'current',
		displayOptions: { show: showFor },
		description:
			'The budget month in ISO format (e.g. 2024-01-01) or "current" for the current month',
	},
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the category to update',
	},
	{
		displayName: 'Budgeted Amount',
		name: 'budgeted',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show: showFor },
		description:
			'The budgeted amount for the category in milliunits (e.g. 10000 = $10.00)',
		routing: {
			send: {
				type: 'body',
				property: 'category.budgeted',
			},
		},
	},
];
