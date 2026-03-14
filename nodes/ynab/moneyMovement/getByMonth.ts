import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['moneyMovement'], operation: ['getByMonth'] };

export const moneyMovementGetByMonthDescription: INodeProperties[] = [
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
];
