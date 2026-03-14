import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['payeeLocation'], operation: ['get'] };

export const payeeLocationGetDescription: INodeProperties[] = [
	{
		displayName: 'Payee Location ID',
		name: 'payeeLocationId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the payee location',
	},
];
