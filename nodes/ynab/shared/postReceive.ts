import type {
	IDataObject,
	IExecuteSingleFunctions,
	INodeExecutionData,
} from 'n8n-workflow';

/**
 * Extracts a specific key from the YNAB API response envelope `{ data: { <key>: ... } }`
 * and returns each item as a separate n8n execution item when the value is an array.
 */
export function extractResponse(key: string) {
	return async function (
		this: IExecuteSingleFunctions,
		items: INodeExecutionData[],
	): Promise<INodeExecutionData[]> {
		const responseData = items[0].json as { data: Record<string, unknown> };
		const value = responseData?.data?.[key];

		if (Array.isArray(value)) {
			return value.map((item) => ({ json: item as IDataObject }));
		}

		return [{ json: (value ?? {}) as IDataObject }];
	};
}
