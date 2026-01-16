@echo off
title Dọn dẹp Lịch sử GitHub (Clean History)
color 0C

echo ==========================================================
echo   CANH BAO NGUY HIEM !!!
echo ==========================================================
echo.
echo   Ban sap xoa toan bo lich su thay doi (Commit History).
echo   Du an tren GitHub se tro ve trang thai moi tinh.
echo   Code hien tai trong may se DUOC GIU NGUYEN.
echo.
echo   Hay chac chan rang ban muon lam dieu nay!
echo.
echo ==========================================================
pause

echo.
echo Vui long nhap Link GitHub cua ban (VD: https://github.com/TanyanArchitect/ba-timeline.git)
echo (Vao web GitHub -> Nut xanh Code -> Copy dong HTTPS)
echo.
set /p RepoURL="Dan Link vao day roi bam Enter: "

echo.
echo [1/5] Dang xoa lich su cu...
rmdir /s /q .git

echo.
echo [2/5] Dang khoi tao lai Git...
git init
git branch -M main

echo.
echo [3/5] Dang them code hien tai...
git add .
git commit -m "Initial Release: Blue Archive Timeline"

echo.
echo [4/5] Dang ket noi lai server...
git remote add origin %RepoURL%

echo.
echo [5/5] Dang day len GitHub (Force Push)...
git push -u --force origin main

echo.
echo ==========================================================
echo   DA XONG! LICH SU DA SACH BONG KIN KIT.
echo ==========================================================
pause