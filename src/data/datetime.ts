export type DateTime = DateInstance | DateRange

export enum DateTypes {
    Single,
    Range
}

export interface DateInstance {
    type: DateTypes.Single
    datetime: string
}

export interface DateRange {
    type: DateTypes.Range
    start: string
    end: string
}