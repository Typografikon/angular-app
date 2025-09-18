import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { BASE_PATH as MESSAGE_API_BASE_PATH, Configuration as MessageConfiguration } from 'message-api';
import { BASE_PATH as CODEBOOK_API_BASE_PATH, Configuration as RestConfiguration } from 'codebook-rest-api-v2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: MESSAGE_API_BASE_PATH, useValue: '//localhost:4200' },
    { provide: CODEBOOK_API_BASE_PATH, useValue: '//localhost:4200/api/v2' },
    // { provide: CODEBOOK_API_BASE_PATH, useValue: 'http://localhost:8083/api/v2' },
    // { provide: CODEBOOK_API_BASE_PATH, useValue: 'https://codebooks-dev.kb.cz/int-codebooks-rest/api/v2' },

      /** Pokud potřebuješ autorizaci/apiKey/cookies:
    {
      provide: Configuration,
      useValue: new Configuration({
        basePath: 'http://localhost:3000',
        // apiKey: '...',
        // accessToken: '...',
        // withCredentials: true,
      }),
    },
    */
  ],
};
