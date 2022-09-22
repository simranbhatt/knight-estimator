import { listPossibleMoves } from './possiblemoves.js';
import getPosition from './currentposition.js';

export const sleep = (time = 1000) => new Promise((resolve) => setTimeout(resolve, time));

export async function welcome() {
    console.log(`Welcome to the Knight Estimator.
We show you your Knight's possible moves from its current position.`);
    await sleep();
    console.log();
}

export async function runProgram() {
    var currentPosition = await getPosition();
    listPossibleMoves(currentPosition);
}