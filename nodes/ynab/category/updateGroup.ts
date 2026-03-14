import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['category'], operation: ['updateGroup'] };

export const categoryUpdateGroupDescription: INodeProperties[] = [
	{
		displayName: 'Category Group ID',
		name: 'categoryGroupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the category group to update',
	},
	{
		displayName: 'Name',
		name: 'categoryGroupName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The new name of the category group',
		routing: {
			send: {
				type: 'body',
				property: 'category_group.name',
			},
		},
	},
];
