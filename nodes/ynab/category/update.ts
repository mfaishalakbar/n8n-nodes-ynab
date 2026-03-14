import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['category'], operation: ['update'] };

export const categoryUpdateDescription: INodeProperties[] = [
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showFor },
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The new name for the category',
				routing: {
					send: {
						type: 'body',
						property: 'category.name',
					},
				},
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				description: 'A note for the category',
				routing: {
					send: {
						type: 'body',
						property: 'category.note',
					},
				},
			},
		],
	},
];
