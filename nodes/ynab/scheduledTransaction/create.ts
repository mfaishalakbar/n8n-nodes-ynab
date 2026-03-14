import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['scheduledTransaction'], operation: ['create'] };

const frequencyOptions = [
	{ name: 'Never', value: 'never' },
	{ name: 'Daily', value: 'daily' },
	{ name: 'Weekly', value: 'weekly' },
	{ name: 'Every Other Week', value: 'everyOtherWeek' },
	{ name: 'Twice a Month', value: 'twiceAMonth' },
	{ name: 'Every 4 Weeks', value: 'every4Weeks' },
	{ name: 'Monthly', value: 'monthly' },
	{ name: 'Every Other Month', value: 'everyOtherMonth' },
	{ name: 'Every 3 Months', value: 'every3Months' },
	{ name: 'Every 4 Months', value: 'every4Months' },
	{ name: 'Twice a Year', value: 'twiceAYear' },
	{ name: 'Yearly', value: 'yearly' },
	{ name: 'Every Other Year', value: 'everyOtherYear' },
];

export const scheduledTransactionCreateDescription: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'scheduledTransactionAccountId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the account for this scheduled transaction',
		routing: {
			send: {
				type: 'body',
				property: 'scheduled_transaction.account_id',
			},
		},
	},
	{
		displayName: 'Date',
		name: 'scheduledTransactionDate',
		type: 'dateTime',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The first date for this scheduled transaction (ISO format: YYYY-MM-DD)',
		routing: {
			send: {
				type: 'body',
				property: 'scheduled_transaction.date',
			},
		},
	},
	{
		displayName: 'Amount',
		name: 'scheduledTransactionAmount',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show: showFor },
		description:
			'The amount in milliunits (e.g. -10000 = -$10.00 outflow, 10000 = $10.00 inflow)',
		routing: {
			send: {
				type: 'body',
				property: 'scheduled_transaction.amount',
			},
		},
	},
	{
		displayName: 'Frequency',
		name: 'scheduledTransactionFrequency',
		type: 'options',
		required: true,
		default: 'monthly',
		displayOptions: { show: showFor },
		description: 'How often the transaction repeats',
		options: frequencyOptions,
		routing: {
			send: {
				type: 'body',
				property: 'scheduled_transaction.frequency',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showFor },
		options: [
			{
				displayName: 'Category ID',
				name: 'category_id',
				type: 'string',
				default: '',
				description: 'The ID of the category for this scheduled transaction',
				routing: {
					send: {
						type: 'body',
						property: 'scheduled_transaction.category_id',
					},
				},
			},
			{
				displayName: 'Flag Color',
				name: 'flag_color',
				type: 'options',
				// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
				options: [
					{ name: 'None', value: '' },
					{ name: 'Blue', value: 'blue' },
					{ name: 'Green', value: 'green' },
					{ name: 'Orange', value: 'orange' },
					{ name: 'Purple', value: 'purple' },
					{ name: 'Red', value: 'red' },
					{ name: 'Yellow', value: 'yellow' },
				],
				default: '',
				description: 'The flag color for the scheduled transaction',
				routing: {
					send: {
						type: 'body',
						property: 'scheduled_transaction.flag_color',
					},
				},
			},
			{
				displayName: 'Memo',
				name: 'memo',
				type: 'string',
				default: '',
				description: 'A memo for the scheduled transaction',
				routing: {
					send: {
						type: 'body',
						property: 'scheduled_transaction.memo',
					},
				},
			},
			{
				displayName: 'Payee ID',
				name: 'payee_id',
				type: 'string',
				default: '',
				description: 'The ID of the payee. Use either Payee ID or Payee Name, not both.',
				routing: {
					send: {
						type: 'body',
						property: 'scheduled_transaction.payee_id',
					},
				},
			},
			{
				displayName: 'Payee Name',
				name: 'payee_name',
				type: 'string',
				default: '',
				description: 'The name of the payee. Use either Payee ID or Payee Name, not both.',
				routing: {
					send: {
						type: 'body',
						property: 'scheduled_transaction.payee_name',
					},
				},
			},
		],
	},
];
