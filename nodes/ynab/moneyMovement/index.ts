import type { INodeProperties } from 'n8n-workflow';
import { extractResponse } from '../shared/postReceive';
import { moneyMovementGetAllDescription } from './getAll';
import { moneyMovementGetByMonthDescription } from './getByMonth';
import { moneyMovementGetGroupsDescription } from './getGroups';
import { moneyMovementGetGroupsByMonthDescription } from './getGroupsByMonth';

const showFor = { resource: ['moneyMovement'] };

export const moneyMovementDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showFor },
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many money movements',
				description: 'Returns many money movements for a budget',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/money_movements',
					},
					output: {
						postReceive: [extractResponse('money_movements')],
					},
				},
			},
			{
				name: 'Get by Month',
				value: 'getByMonth',
				action: 'Get money movements for a month',
				description: 'Returns money movements for a specific budget month',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/months/{{$parameter.month}}/money_movements',
					},
					output: {
						postReceive: [extractResponse('money_movements')],
					},
				},
			},
			{
				name: 'Get Groups',
				value: 'getGroups',
				action: 'Get all money movement groups',
				description: 'Returns all money movement groups for a budget',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/money_movement_groups',
					},
					output: {
						postReceive: [extractResponse('money_movement_groups')],
					},
				},
			},
			{
				name: 'Get Groups by Month',
				value: 'getGroupsByMonth',
				action: 'Get money movement groups for a month',
				description: 'Returns money movement groups for a specific budget month',
				routing: {
					request: {
						method: 'GET',
						url: '=/plans/{{$parameter.planId}}/months/{{$parameter.month}}/money_movement_groups',
					},
					output: {
						postReceive: [extractResponse('money_movement_groups')],
					},
				},
			},
		],
		default: 'getAll',
	},
	...moneyMovementGetAllDescription,
	...moneyMovementGetByMonthDescription,
	...moneyMovementGetGroupsDescription,
	...moneyMovementGetGroupsByMonthDescription,
];
