import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['category'], operation: ['get'] };

export const categoryGetDescription: INodeProperties[] = [
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
