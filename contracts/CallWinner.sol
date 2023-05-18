// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IWinner {
    function attempt() external;
}

contract CallWinner {
    address winnerContract;

    constructor(address _winnerContract ) {
        winnerContract = _winnerContract;
    }

    function callAttempt() external {
        IWinner(winnerContract).attempt();
    }
}