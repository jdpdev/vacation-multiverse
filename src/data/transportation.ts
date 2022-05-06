import { DateTime } from "./datetime"

export interface Transportation {
    to: string
    from: string
    departure: DateTime
    arrival: DateTime
}

export interface AirplaneTransportation extends Transportation {
    flight: string
}

export interface TrainTransportation extends Transportation {
    train: string
}

export interface CarTransportation extends Transportation {

}