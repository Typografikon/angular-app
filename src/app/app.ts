import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultService as DefaultServiceMessage, Message } from 'message-api';
import { DefaultService as DefaultServiceRest, GetCodebookResponseGetCodebookResponse } from 'codebook-rest-api-v2';
import { toSignal } from '@angular/core/rxjs-interop';
import { shareReplay} from "rxjs";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet ],
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

    // Observable vytvořené jen jednou
    private readonly message$ = this.messageApi.messageGet().pipe(shareReplay(1));
    private readonly codebook$ = this.codebookApi.getCodebook("CB_DocType").pipe(shareReplay(1));

    // Signál vytvořený z jednoho Observable
    protected readonly message  = toSignal(this.message$, { initialValue: {} as Message });
    protected readonly codebook = toSignal(this.codebook$, { initialValue: {} as GetCodebookResponseGetCodebookResponse });

    constructor() {
        console.log('App component constructor...');
        console.log('1. Codebook:', this.codebook().codebook);
        // this.codebookApi.getCodebook("CB_DocType").forEach(v => console.log('2. Codebook:', v.codebook));
        this.codebookApi.getCodebook("CB_DocType").subscribe(v => console.log('2. Codebook:', v.codebook));
    }
}
