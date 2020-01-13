import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']

})
export class StarComponent implements OnInit{
   
   @Input() rating: number;
   @Output() message: EventEmitter<string>=new EventEmitter<string>();
    widthBasedOnRating: number;

    ngOnInit(): void {
        this.widthBasedOnRating=(this.rating*75)/5;
    }

    onClick(){
        this.message.emit(`This is the rating: ${this.rating}`);
    }
   
}