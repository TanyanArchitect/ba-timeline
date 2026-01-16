@echo off
title UPDATE WEBSITE LEN GITHUB
color 0E

echo ==================================================
echo   DANG CAP NHAT WEBSITE LEN MANG...
echo ==================================================
echo.

set /p Message="Ban vua sua cai gi? (VD: Them story moi): "

echo.
echo [1/3] Dang gom file (git add)...
git add .

echo.
echo [2/3] Dang dong goi (git commit)...
git commit -m "%Message%"

echo.
echo [3/3] Dang day len mang (git push)...
git push

echo.
echo ==================================================
echo   THANH CONG!
echo   Hay doi 1-2 phut roi vao web kiem tra nhe.
echo ==================================================
pause