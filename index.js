// Date Helpers for Javascript.
// Sam Drew, 2019.

// Get the exact middle Date of a month that a given Date exists within.
export function getMiddleOfMonth(date) {
    const first = new Date(date.getFullYear(), date.getMonth(), 0);
    const last = new Date(date.getFullYear(), (date.getMonth() + 1), 0);
    const diff = (last - first);
    return(new Date(diff));
};

// Get the halfway point between 2 dates.
export function getHalfwayDate(date1, date2) {
    const diff = (date2 - date1);
    return(new Date(diff));
};

// Get the decimal of the week that is left.
export function getWeekRemaining(date) {
    const currentDay = date.getDay();
    const daysLeft = (7 - currentDay);
    const endOfWeek = new Date(date.getFullYear(), date.getMonth(), (date.getDate() + daysLeft + 1));
    const diff = (endOfWeek - date);
    const amountLeft = (diff / (1000 * 60 * 60 * 24 * 7));
    return(amountLeft);
};
