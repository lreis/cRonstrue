export interface Locale {
    // TODO: Circle back and use null/undefined aware types for optionals below in TypeScript 2.0: https://github.com/Microsoft/TypeScript/pull/7140
    // TODO: These locale translations would be a good use for ES6 template strings except we sometimes concatenate multiple transactions together before
    //       doing the actual template replacement.

    use24HourTimeFormatByDefault(): boolean;
    anErrorOccuredWhenGeneratingTheExpressionD(): string;
    everyMinute(): string;
    everyHour(): string;
    atSpace(): string;
    everyMinutebetweenX0AndX1(): string;
    at(): string;
    spaceAnd(): string;
    everysecond(): string;
    everyX0Seconds(): string;
    secondsX0ThroughX1PastTheMinute(): string;
    atX0SecondsPastTheMinute(): string;
    atX0SecondsPastTheMinuteGt20(): string; //optional
    everyX0Minutes(): string;
    minutesX0ThroughX1PastTheHour(): string;
    atX0MinutesPastTheHour(): string;
    atX0MinutesPastTheHourGt20(): string; //optional
    everyX0Hours(): string;
    betweenX0AndX1(): string;
    atX0(): string;
    commaEveryDay(): string;
    commaEveryX0daysOfTheWeek(): string;
    commaX0ThroughX1(): string;
    commaMonthX0ThroughMonthX1(): string //optional
    commaYearX0ThroughYearX1(): string //optional
    first(): string;
    second(): string;
    third(): string;
    forth(): string;
    fifth(): string;
    commaOnThe(): string;
    spaceX0OfTheMonth(): string;
    commaOnTheLastX0OfTheMonth(): string;
    commaOnlyOnX0(): string;
    commaEveryX0Months(): string;
    commaOnlyInX0(): string;
    commaOnTheLastDayOfTheMonth(): string;
    commaOnTheLastWeekdayOfTheMonth(): string;
    firstWeekday(): string;
    weekdayNearestDayX0(): string;
    commaOnTheX0OfTheMonth(): string;
    commaEveryX0Days(): string;
    commaBetweenDayX0AndX1OfTheMonth(): string;
    commaOnDayX0OfTheMonth(): string;
    spaceAndSpace(): string;
    commaEveryMinute(): string;
    commaEveryHour(): string;
    commaEveryX0Years(): string;
    commaStartingX0(): string;
    daysOfTheWeek(): string[];
    monthsOfTheYear(): string[];
}