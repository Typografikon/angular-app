import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import {DefaultService, Message} from 'message-api';

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

    protected readonly title = signal('angular-app');
    protected readonly description = signal('Description...');
    protected readonly api = inject(DefaultService);
    protected readonly message = toSignal(this.api.messageGet(), { initialValue: {} as Message });

}
