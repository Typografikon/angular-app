// src/app/json-accept.interceptor.ts
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import {inject} from "@angular/core";
import {Configuration as MessageConfiguration} from 'message-api';
import {Configuration as RestConfiguration} from 'codebook-rest-api-v2';


export const jsonAcceptInterceptor: HttpInterceptorFn = (req, next) => {

    const  restConfiguration: RestConfiguration = inject(RestConfiguration);
    const  messageConfiguration: MessageConfiguration = inject(MessageConfiguration);

    return next(req).pipe(
        mergeMap(event => {
            console.info('Response event is HttpResponse:', event instanceof HttpResponse, typeof event, ':', event);
            if(event instanceof HttpResponse){
                let type = event.headers.get('Content-Type') || '';
                console.info('HttpResponse type:', type, 'restConfiguration.isJsonMime:', restConfiguration.isJsonMime(type), 'messageConfiguration.isJsonMime:', messageConfiguration.isJsonMime(type));
            }
            return of(event)
        })
    );

};