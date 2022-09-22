export async function positionIsValid(currentPosition) {
    if (currentPosition.length === 2) {
        const row = currentPosition.charAt(0);
        const column = currentPosition.charAt(1);
        return isValidRow(row) && isValidColumn(column);
    }
    return false;
}

export function isValidRow(row) {
    return row > 0 && row < 9;
}

export function isValidColumn(column) {
    const columnRange = /^[a-hA-H]+$/
    return columnRange.test(column);
}