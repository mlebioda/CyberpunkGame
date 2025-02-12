#!/bin/bash

# Przejdź do katalogu z projektem
cd /media/admin/SSC/CyberpunkGame  # Zmień na odpowiednią ścieżkę

# Pobierz najnowszy commit
git pull origin main

# Zbuduj nowy obraz Docker
docker-compose down
docker-compose up --build -d

# (Opcjonalnie) Sprawdź, czy aplikacja działa:
docker ps
