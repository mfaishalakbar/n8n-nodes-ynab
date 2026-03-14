import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['transaction'], operation: ['create'] };

export const transactionCreateDescription: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'transactionAccountId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The ID of the account for this transaction',
		routing: {
			send: {
				type: 'body',
				property: 'transaction.account_id',
			},
		},
	},
	{
		displayName: 'Date',
		name: 'transactionDate',
		type: 'dateTime',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'The date of the transaction (ISO format: YYYY-MM-DD)',
		routing: {
			send: {
				type: 'body',
				property: 'transaction.date',
			},
		},
	},
	{
		displayName: 'Amount',
		name: 'transactionAmount',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show: showFor },
		description:
			'The amount in milliunits (e.g. -10000 = -$10.00 outflow, 10000 = $10.00 inflow)',
		routing: {
			send: {
				type: 'body',
				property: 'transaction.amount',
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
				displayName: 'Approved',
				name: 'approved',
				type: 'boolean',
				default: true,
				description: 'Whether the transaction is approved',
				routing: {
					send: {
						type: 'body',
						property: 'transaction.approved',
					},
				},
			},
			{
				displayName: 'Category ID',
				name: 'category_id',
				type: 'string',
				default: '',
				description: 'The ID of the category for this transaction',
				routing: {
					send: {
						type: 'body',
						property: 'transaction.category_id',
					},
				},
			},
			{
				displayName: 'Cleared Status',
				name: 'cleared',
				type: 'options',
				options: [
					{ name: 'Cleared', value: 'cleared' },
					{ name: 'Reconciled', value: 'reconciled' },
					{ name: 'Uncleared', value: 'uncleared' },
				],
				default: 'uncleared',
				description: 'The cleared status of the transaction',
				routing: {
					send: {
						type: 'body',
						property: 'transaction.cleared',
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
				description: 'The flag color for the transaction',
				routing: {
					send: {
						type: 'body',
						property: 'transaction.flag_color',
					},
				},
			},
			{
				displayName: 'Import ID',
				name: 'import_id',
				type: 'string',
				default: '',
				description:
					'An import ID to prevent duplicate imports (max 36 characters)',
				routing: {
					send: {
						type: 'body',
						property: 'transaction.import_id',
					},
				},
			},
			{
				displayName: 'Memo',
				name: 'memo',
				type: 'string',
				default: '',
				description: 'A memo for the transaction (max 200 characters)',
				routing: {
					send: {
						type: 'body',
						property: 'transaction.memo',
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
						property: 'transaction.payee_id',
					},
				},
			},
			{
				displayName: 'Payee Name',
				name: 'payee_name',
				type: 'string',
				default: '',
				description:
					'The name of the payee. Creates a new payee if it does not exist. Use either Payee ID or Payee Name, not both.',
				routing: {
					send: {
						type: 'body',
						property: 'transaction.payee_name',
					},
				},
			},
		],
	},
];
