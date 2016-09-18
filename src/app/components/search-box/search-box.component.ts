import { Component, EventEmitter, Output, Input } from '@angular/core'

export interface IOptions {

}

@Component({
  selector: 'ft-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Input() autoComplete: boolean
  @Input() autoCompleteOptions: [IOptions]
  @Output() searchEvent = new EventEmitter()

  constructor() {
    // Do stuff
  }

  /**
   * Emits a search event for the parent component
   *
   * @param {any} value
   */
  search(value) {
    this.searchEvent.emit(value)
  }

}
