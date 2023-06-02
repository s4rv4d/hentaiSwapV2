// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;
pragma abicoder v2;

import "node_modules/@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "node_modules/@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

contract SingleSwapToken {
    ISwapRouter public constant swapRouter = ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);

    address public constant DAI = 0x2bcAE8205a77dabB2479CF2c85ded7d963101B86;
    address public constant WETH9 = OxEF1DACBce5194C668BEe55f2ca599F366709db0C;
    address public constant USDC = OxA0b86991c6218b36c1d19D4a29Eb0c3606eB48;
 
    function swapExactInputString(uint amount) external returns(uint amountOut) {

        // transfer WETH9 from user to this contract for a specified amount
        TransferHelper.safeTransferFrom(WETH9, msg.sender, address(this), amount);
        // set approval router contract for the allocted tokens
        TransferHelper.safeApprove(WETH9, address(swapRouter), amount);

        // params for the execution
        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
            // token to swap from
            tokenIn: WETH9,
            // token to swap to
            tokenOut: DAI,
            // gas limit
            fee: 3000,
            // user receiving the swapped amount
            recipient: msg.sender,
            // how long the txn should take
            deadline: block.timestamp,
            // the amount to be swapped
            amountIn: amount,
            // the minimum output value
            amountOutMinimum: 0,
            sqrtPriceLimitX96: 0
        });

        // execute swap
        amountOut = swapRouter.exactInputSingle(params);
    }

    function swapExactInputString(uint amountOut, uint amountInMaximum) external returns(uint amountIn) {
         // transfer WETH9 from user to this contract for a specified amount
        TransferHelper.safeTransferFrom(WETH9, msg.sender, address(this), amountInMaximum);
        // set approval to this contract for the allocted tokens
        TransferHelper.safeApprove(WETH9, address(this), amountInMaximum);

        // params for the execution
        ISwapRouter.ExactOutputSingleParams memory params = ISwapRouter.ExactOutputSingleParams({
            // token to swap from
            tokenIn: WETH9,
            // token to swap to
            tokenOut: DAI,
            // gas limit
            fee: 3000,
            // user receiving the swapped amount
            recipient: msg.sender,
            // how long the txn should take
            deadline: block.timestamp,
            // the amount to be swapped
            amountOut: amountOut,
            // the maximum output value
            amountInMaximum: amountInMaximum,
            sqrtPriceLimitX96: 0
        });

        amountIn = ISwapRouter.exactOutputSingle(params);

        // send remaining funds back if remaining
        if(amountIn < amountInMaximum) {
            // remove approve allocatoin from router
            TransferHelper.safeApprove(WETH9, address(swapRouter), 0);
            // send remaining funds back to user
            TransferHelper.safeTransfer(WETH9, msg.sender, amountInMaximum - amountIn);
        }
    }
}