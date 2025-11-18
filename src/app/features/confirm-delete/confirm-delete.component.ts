import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-confirm-delete",
    templateUrl: "./confirm-delete.component.html",
    styleUrls: ['./confirm-delete.component.scss'],
})
export class ConfirmDeleteComponent implements OnInit {
    @Input() heading: string = "";
    @Input() confirmText: string = "";
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}
    dismissModal() {
        this.activeModal.close();
    }
}
