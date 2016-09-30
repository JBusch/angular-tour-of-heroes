import {Component, OnInit} from "@angular/core";
@Component({
    selector: 'weather',
    template: `<h3>{{ title }}</h3>`
})

export class WeatherComponent implements OnInit {
    title = 'Wetter';

    constructor() {

    }

    ngOnInit(): void {

    }
}