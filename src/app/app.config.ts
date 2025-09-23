import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {jsonAcceptInterceptor} from './json-accept.interceptor';
import {BASE_PATH as MESSAGE_API_BASE_PATH, Configuration as MessageConfiguration} from 'message-api';
import {BASE_PATH as CODEBOOK_API_BASE_PATH, Configuration as RestConfiguration} from 'codebook-rest-api-v2';

let restConfiguration: RestConfiguration = new RestConfiguration({
    basePath: '//localhost:4200/api/v2',
    // apiKey: '...',
    // accessToken: '...',
    // withCredentials: true,
});
restConfiguration.selectHeaderContentType(['application/json']);
restConfiguration.selectHeaderAccept(['application/json']);
let messageConfiguration: MessageConfiguration = new MessageConfiguration({
    basePath: '//localhost:4200',
    // apiKey: '...',
    // accessToken: '...',
    // withCredentials: true,
});
messageConfiguration.selectHeaderContentType(['application/json']);
messageConfiguration.selectHeaderAccept(['application/json']);

console.warn('RestConfiguration isJsonMime =', restConfiguration.isJsonMime('application/json; charset=utf-8'));
console.warn('MessageConfiguration isJsonMime =', messageConfiguration.isJsonMime('application/json; charset=utf-8'));

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        // provideHttpClient(withInterceptors([jsonAcceptInterceptor])),
        // { provide: MESSAGE_API_BASE_PATH, useValue: '//localhost:4200'},
        // { provide: CODEBOOK_API_BASE_PATH, useValue: '//localhost:4200/api/v2' },
        // { provide: CODEBOOK_API_BASE_PATH, useValue: 'http://localhost:8083/api/v2' },
        // { provide: CODEBOOK_API_BASE_PATH, useValue: 'https://codebooks-dev.kb.cz/int-codebooks-rest/api/v2' },
        {
            provide: RestConfiguration,
            useValue: restConfiguration,
        },
        {
            provide: MessageConfiguration,
            useValue: messageConfiguration,
        }
    ],
};
