rebuild image:
docker-compose up --build -d

backup
docker exec -t my_postgres pg_dump -U myuser mydatabase > backup.sql

restore backup
cat backup.sql | docker exec -i my_postgres psql -U myuser -d mydatabase



# Step 2: Rebuild the Docker image
docker-compose build

# Step 3: Restart the Docker container
docker-compose up


admin@admin.com and admin.




## Raspberry
### TMUX

tmux new -s mysession

Press Ctrl + B, then D.
tmux attach -t mysession


### Docker
cd /home/admin/repos/
docker stop cyberpunkgamecontainer
docker rm cyberpunkgamecontainer
docker ps -a

docker pull mlebioda/cyberpunk-game:latest
docker-compose down
docker-compose up -d
ngrok http http://localhost:8080