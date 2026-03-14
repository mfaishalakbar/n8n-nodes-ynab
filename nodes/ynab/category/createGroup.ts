import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['category'], operation: ['createGroup'] };

export const categoryCreateGroupDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'categoryGroupName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The name of the category group',
		routing: {
			send: {
				type: 'body',
				property: 'category_group.name',
			},
		},
	},
];
