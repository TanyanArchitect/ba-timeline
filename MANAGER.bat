@echo off
title Blue Archive Timeline - MANAGER
color 0B

:MENU
cls
echo ==================================================
echo   TRUNG TAM DIEU KHIEN (BLUE ARCHIVE TIMELINE)
echo ==================================================
echo.
echo   1. VIET BAI (Bat Server + Mo Admin + Mo Web Local)
echo   2. DANG BAI (Day Code len GitHub + Mo Web Chinh)
echo   3. Thoat
echo.
echo ==================================================
set /p choice=Ban muon lam gi? (Nhap so 1 hoac 2): 

if "%choice%"=="1" goto START_DEV
if "%choice%"=="2" goto UPDATE_WEB
if "%choice%"=="3" exit

echo Lua chon khong hop le!
pause
goto MENU

:START_DEV
cls
echo [1/3] Dang bat Server Quan ly File (Decap Server)...
start "Decap Server" cmd /k "npx decap-server"

echo [2/3] Dang bat Web Local (Vite)...
start "Vite Localhost" cmd /k "npm run dev"

echo [3/3] Dang khoi dong trinh duyet...
echo Vui long doi 5 giay de server chay on dinh...
timeout /t 5 >nul

start "" "http://localhost:5173/"

start "" "http://localhost:5173/admin/index.html"

echo.
echo DA XONG! Hai cua so den da bat. Trinh duyet da mo.
echo Hay giu cac cua so nay trong qua trinh lam viec.
pause
exit

:UPDATE_WEB
cls
echo.
echo Ban da chon: CAP NHAT WEB LEN MANG
echo.
set /p Message="Ban vua sua cai gi? (VD: Them chap moi): "

echo.
echo [1/4] Dang gom file (git add)...
git add .

echo.
echo [2/4] Dang dong goi (git commit)...
git commit -m "%Message%"

echo.
echo [3/4] Dang day len mang (git push)...
git push

echo.
echo [4/4] Dang mo Website chinh thuc...
echo Luu y: GitHub can 1-2 phut de cap nhat noi dung moi.
timeout /t 5 >nul

start "" "https://TanyanArchitect.github.io/ba-timeline/"

echo.
echo THANH CONG!
pause
exit