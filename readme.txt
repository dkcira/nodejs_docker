https://itnext.io/docker-from-the-beginning-part-i-ae809b84f89f


npm init -y

npm install express --save

docker build . -t dkcira/nodeapp

docker run --name nodeapp -p 8000:3000 -d dkcira/nodeapp

docker run --name nodeapp --volume $(pwd):/app -p 8000:3000 -d dkcira/nodeapp

npm install --save-dev nodemon
