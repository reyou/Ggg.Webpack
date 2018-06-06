@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
:: pause 
echo.
::============================================================================= 
echo "GggMessage: npm install webpack --save."  
call npm install webpack --save  
::call npm install webpack -g  
echo.
::=============================================================================
echo "GggMessage: npm install jquery --save."  
call npm install jquery --save   
echo.
::=============================================================================
echo "GggMessage: npm install lodash --save."  
call npm install lodash --save   
echo.
::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul