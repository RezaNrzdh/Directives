import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective} from "./directives/highlight.directive";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, HighlightDirective],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isOpen: boolean = false;
    buttonTitleList: Array<string> = ["Open List", "Close List"];
    buttonTitle: string = this.buttonTitleList[0];
    programList: Array<string> = ["HTML", "CSS", "Javascript", "Typescript", "Angular"];

    onOpenList(): void {
        this.isOpen = !this.isOpen;
        if(this.isOpen) this.buttonTitle = this.buttonTitleList[1];
        else this.buttonTitle = this.buttonTitleList[0];
    }
}
