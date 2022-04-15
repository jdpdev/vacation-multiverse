import { Datetime } from "./datetime";
import { Location } from "./location";

export type AnyEvent = SimpleEvent | LocationEvent | TravelEvent | LodgingEvent

export interface SimpleEvent {
    name: string,
    datetime: Datetime
}

export function getEmptyEvent(): SimpleEvent {
    return {
        name: '',
        datetime: {}
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