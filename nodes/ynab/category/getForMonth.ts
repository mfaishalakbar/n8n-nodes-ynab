import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['category'], operation: ['getForMonth'] };

export const categoryGetForMonthDescription: INodeProperties[] = [
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
		description: 'The ID of the category',
	},
];
