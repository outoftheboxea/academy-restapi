# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
sudo apt install docker.io -y

cd restapiapp

# Build and run Docker container
docker build -t github-api .
docker run -d -p 3000:3000 --env-file .env github-api
