FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npm i -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist"]

# To build the Docker image:
# docker build -t your-image-name .

# To run the container:
# docker run -p 3000:3000 your-image-name

# To list all images:
# docker images

# To remove an image:
# docker rmi image-id

# To stop a container:
# docker stop container-id

# To list running containers:
# docker ps

# To list all containers (including stopped):
# docker ps -a
