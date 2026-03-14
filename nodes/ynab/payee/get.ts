import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['payee'], operation: ['get'] };

export const payeeGetDescription: INodeProperties[] = [
	{
		displayName: 'Payee ID',
		name: 'payeeId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the payee',
	},
];
