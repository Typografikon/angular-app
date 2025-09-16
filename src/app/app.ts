import {Component, ChangeDetectionStrategy, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
    readonly description = signal('Description...');
    constructor() {
    }
}
