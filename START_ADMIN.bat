@echo off
title Blue Archive Timeline - ADMIN MODE
color 0A

echo ==================================================
echo   DANG KHOI DONG CHE DO NHAP LIEU (ADMIN)
echo ==================================================
echo.

start "Decap Server" cmd /k "npx decap-server"

start "Vite Localhost" cmd /k "npm run dev"

echo.
echo DA XONG! Hai cua so den da duoc bat len.
echo Hay mo trinh duyet va vao:
echo.
echo 👉 http://localhost:5173/admin/index.html
echo.
pause