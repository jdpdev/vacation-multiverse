import { Location } from "./location";

export type AnyEvent = SimpleEvent | LocationEvent | TravelEvent | LodgingEvent

export interface SimpleEvent {
    name: string,
    dateStamp: string
}

export function createSimpleEvent(name: string, dateStamp: string): SimpleEvent {
    return {
        name,
        dateStamp
    }
}

export function getEmptyEvent(): SimpleEvent {
    return {
        name: '',
        dateStamp: ''
    }
}

export interface LocationEvent extends SimpleEvent {
    location: Location
}

interface MultiEvent {
    start: SimpleEvent,
    end: SimpleEvent
}

export interface TravelEvent extends MultiEvent {
    
}

export interface LodgingEvent extends MultiEvent {

}