import inquirer from 'inquirer';

export default async function getPosition() {
    const answers = await inquirer.prompt({
        name: 'knight_position',
        type: 'input',
        message: ` Enter the knight's position on the board.
    You can also type \"chessboard\" to visualise the 8x8 board,
    or \"exit\" to exit the application.\n`
    });

    return answers.knight_position;
}