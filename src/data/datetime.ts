export type DateTime = DateInstance | DateRange

export enum DateTypes {
    Single,
    Range
}

export interface DateInstance {
    type: DateTypes.Single
    datetime: string
    timeless: boolean
}

export interface DateRange {
    type: DateTypes.Range
    start: string
    end: string
    timeless: boolean
}