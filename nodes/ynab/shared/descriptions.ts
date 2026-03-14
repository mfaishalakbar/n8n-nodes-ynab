import type { INodeProperties } from 'n8n-workflow';

export const planIdField: INodeProperties = {
	displayName: 'Budget ID',
	name: 'planId',
	type: 'string',
	default: 'last-used',
	required: true,
	description:
		'The ID of the budget. Use "last-used" to automatically select the most recently used budget, or "default" if you have a default budget set.',
};
