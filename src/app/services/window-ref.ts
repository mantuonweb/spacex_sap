import { Injectable } from '@angular/core';
declare const window,document;
function _window(): any {
    return window;
}
function _document(): any {
    return document;
}
@Injectable({
    providedIn:'root'
})
export class WindowRef {
    get nativeWindow(): any {
        return _window();
    }
    get nativeDocument(): any {
        return _window();
    }
}
