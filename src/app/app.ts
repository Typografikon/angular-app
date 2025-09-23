import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultService as DefaultServiceMessage, Message } from 'message-api';
import { DefaultService as DefaultServiceRest, GetCodebookResponseGetCodebookResponse } from 'codebook-rest-api-v2';
import { toSignal } from '@angular/core/rxjs-interop';
import { shareReplay} from "rxjs";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ RouterOutlet ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class App {

    protected readonly title       = signal('angular-app');
    protected readonly description = signal('Description...');

    protected readonly messageApi  = inject(DefaultServiceMessage);
    protected readonly codebookApi = inject(DefaultServiceRest);

    private readonly message$  = this.messageApi.messageGet().pipe(shareReplay(1));
    private readonly codebook$ = this.codebookApi.getCodebook("CB_DocType").pipe(shareReplay(1));

    // Signál vytvořený z jednoho Observable
    protected readonly message  = toSignal(this.message$);
    protected readonly codebook = toSignal(this.codebook$); //
    protected readonly toString = (val: any) => JSON.stringify(val);

    constructor() {
        console.log('App component constructor...');

        // Message:
        // console.warn('Message from signal:', this.message());
        this.messageApi.messageGet().subscribe(v => console.warn('Message from subscribe:', v));

        // Codebook:
        // console.warn('Codebook from signal:', this.codebook()?.codebook);
        this.codebookApi.getCodebook("CB_DocType").subscribe(v => console.warn('Codebook from subscribe:', v?.codebook));

        /*
        this.codebookApi.getCodebook("CB_DocType").subscribe(v => {
            if (v instanceof Blob) {
                v.text().then(text => {
                    let parsed = undefined;
                    try {
                        parsed = JSON.parse(text);
                        console.log('Codebook from subscribe (Blob before parsed):', v);
                        console.log('Codebook from subscribe (text before parsed):', text.substring(0, 100), '...');
                        console.log('Codebook from subscribe (text when parsed):', parsed);
                    } catch (err) {
                        console.error('JSON parse error:', err, text);
                    }
                    return parsed;
                });
            } else {
                console.log('Codebook from subscribe (not a Blob):', v);
            }
        });
        */

    }

}
