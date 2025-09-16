import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { BASE_PATH, Configuration } from 'message-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: BASE_PATH, useValue: '//localhost:4200' },
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
