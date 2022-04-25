// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: false,
  version: env.mifos_x_version,
  fineractPlatformTenantId: 'default',  // For connecting to server running elsewhere update the tenant identifier
  baseApiUrl: JSON.parse(localStorage.getItem('mifosXServerURL')) || 'https://dev.mifos.io',  // For connecting to server running elsewhere update the base API URL
  allowServerSwitch: env.allow_switching_backend_instance,
  apiProvider: '/fineract-provider/api',
  apiVersion: '/v1',
  serverUrl: '',
  oauth: {
    enabled: false,  // For connecting to Mifos X using OAuth2 Authentication change the value to true
    serverUrl: ''
  },
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    // 'fr-FR'
  ]
};

// Server URL
environment.serverUrl = `${environment.baseApiUrl}${environment.apiProvider}${environment.apiVersion}`;
environment.oauth.serverUrl = `${environment.baseApiUrl}${environment.apiProvider}`;
