#!/usr/bin/env node
import inquirer from 'inquirer';
import chessboard from './board.js';
import { positionIsValid } from './validation.js';
import { isValidRow } from './validation.js';
import { isValidColumn } from './validation.js';
import { findPossiblePositions } from './estimation.js';

const sleep = (time = 1000) => new Promise((resolve) => setTimeout(resolve, time));

async function welcome() {
    console.log(`Welcome to the Knight Estimator.
We show you your Knight's possible moves from its current position.`);
    await sleep();
    console.log();
}

async function getPosition() {
    const answers = await inquirer.prompt({
        name: 'knight_position',
        type: 'input',
        message: ` Enter the knight's position on the board.
    You can also type \"chessboard\" to visualise the 8x8 board,
    or \"exit\" to exit the application.\n`
    });

    return answers.knight_position;
}

async function listPositions(currentPosition) {
    if (currentPosition == 'exit')
        process.exit(0);

    if (currentPosition === 'chessboard')
        chessboard();
    else {
        if (!await positionIsValid(currentPosition)) {
            console.log("\nPlease enter a valid position, or type 'exit' to exit the application.\n");
        } else {
            var possiblePositions = await findPossiblePositions(currentPosition);
            console.log(possiblePositions + "\n");
        }
    }
    await sleep();
    runProgram();
}


async function runProgram() {
    var currentPosition = await getPosition();
    listPositions(currentPosition);
}

await welcome();
await runProgram();