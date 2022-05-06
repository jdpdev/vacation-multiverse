import { DateTime, DateTypes } from "./datetime";
import { Location } from "./location";
import { Transportation } from "./transportation";

export enum EventTypes {
    TripStart,
    TripEnd,
    Transportation
}

export interface CoreEvent {
    type: EventTypes
    name: string
    id: string
    datetime: DateTime
    location?: Location
    transporation?: Transportation
}

export function createInstanceEvent(type: EventTypes, name: string, dateStamp: string): CoreEvent {
    return {
        type,
        name,
        id: `${Math.random()}`,
        datetime: {
            type: DateTypes.Single,
            datetime: dateStamp,
            timeless: true
        }
    }
}