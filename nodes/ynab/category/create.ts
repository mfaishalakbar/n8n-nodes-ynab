import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['category'], operation: ['create'] };

export const categoryCreateDescription: INodeProperties[] = [
	{
		displayName: 'Category Group ID',
		name: 'categoryGroupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the category group this category belongs to',
		routing: {
			send: {
				type: 'body',
				property: 'category.category_group_id',
			},
		},
	},
	{
		displayName: 'Name',
		name: 'categoryName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The name of the category',
		routing: {
			send: {
				type: 'body',
				property: 'category.name',
			},
		},
	},
];
