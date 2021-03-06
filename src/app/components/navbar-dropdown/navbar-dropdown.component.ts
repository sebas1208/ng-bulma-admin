import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
    selector: "ngb-navbar-dropdown",
    templateUrl: "./navbar-dropdown.component.html",
    styles: []
})
export class NavBarDropdownComponent implements OnInit {

    @Input() title = "DropDownTitle";
    @Input() isRight = true;

    @HostBinding("class.navbar-item") navbarItem = true;
    @HostBinding("class.has-dropdown") hasDropdown = true;
    @HostBinding("class.is-active") isActive = false;


    constructor() {}

    ngOnInit() {}

    toggleDropdown() {
        this.isActive = !this.isActive;
    }
}
