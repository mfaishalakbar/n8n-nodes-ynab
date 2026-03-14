import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class YnabApi implements ICredentialType {
	name = 'ynabApi';

	icon: Icon = 'file:../icons/ynab.svg';

	displayName = 'YNAB API';

	documentationUrl = 'https://api.ynab.com/#authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'Personal Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description:
				'Generate a personal access token from My Account → Developer Settings in the YNAB app',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials?.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.ynab.com/v1',
			url: '/user',
			method: 'GET',
		},
	};
}
