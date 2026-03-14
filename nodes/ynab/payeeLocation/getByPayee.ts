import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['payeeLocation'], operation: ['getByPayee'] };

export const payeeLocationGetByPayeeDescription: INodeProperties[] = [
	{
		displayName: 'Payee ID',
		name: 'payeeId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the payee to retrieve locations for',
	},
];
