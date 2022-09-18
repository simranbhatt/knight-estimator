
import { isValidRow } from './validation.js';
import { isValidColumn } from './validation.js';

export async function findPossiblePositions(currentPosition) {
    var possiblePositions = [];
    const row = parseInt(currentPosition.charAt(0));
    const column = currentPosition.charAt(1).charCodeAt(0);

    const rowBelow1 = row - 1;
    const rowBelow2 = row - 2;
    const rowAbove1 = row + 1;
    const rowAbove2 = row + 2;
    const columnLeft1 = String.fromCharCode(column - 1);
    const columnLeft2 = String.fromCharCode(column - 2);
    const columnRight1 = String.fromCharCode(column + 1);
    const columnRight2 = String.fromCharCode(column + 2);

    if(isValidRow(rowBelow1)) {
        if(isValidColumn(columnLeft2))
            possiblePositions.push(rowBelow1+columnLeft2);
        if(isValidColumn(columnRight2)) 
            possiblePositions.push(rowBelow1+columnRight2);
    }
    if(isValidRow(rowBelow2)) {
        if(isValidColumn(columnLeft1))
            possiblePositions.push(rowBelow2+columnLeft1);
        if(isValidColumn(columnRight1)) 
            possiblePositions.push(rowBelow2+columnRight1);
    }
    if(isValidRow(rowAbove1)) {
        if(isValidColumn(columnLeft2)) 
            possiblePositions.push(rowAbove1+columnLeft2);
        if(isValidColumn(columnRight2)) 
            possiblePositions.push(rowAbove1+columnRight2);
    }
    if(isValidRow(rowAbove2)) {
        if(isValidColumn(columnLeft1)) 
            possiblePositions.push(rowAbove2+columnLeft1);
        if(isValidColumn(columnRight1)) 
            possiblePositions.push(rowAbove2+columnRight1);
    }
        return possiblePositions;
}