@echo off

SETLOCAL ENABLEDELAYEDEXPANSION
set name=none
set /a timesRun=0

FOR /L %%A IN (1,1,1000) DO (
@echo off 
set /a timesRun=timesRun+1
@echo Times Script Ran: !timesRun!

@echo off
node main.js
@echo off 

timeout 5

)