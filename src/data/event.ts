import { DateTime, DateTypes } from "./datetime";
import { Location } from "./location";

export enum EventTypes {
    TripStart,
    TripEnd
}

export interface CoreEvent {
    type: EventTypes
    name: string
    id: string
    datetime: DateTime
    location: Location
}

export function createInstanceEvent(type: EventTypes, name: string, dateStamp: string): CoreEvent {
    return {
        type,
        name,
        id: '',
        datetime: {
            type: DateTypes.Single,
            datetime: dateStamp
        },
        location: { name: '' }
    }
}