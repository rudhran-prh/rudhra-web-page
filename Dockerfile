FROM node:latest
ENV TZ=Asia/Kolkata
WORKDIR /root/rudhra/
COPY package*.json ./
RUN npm install
RUN apt install fontconfig
COPY . .
CMD ["npm", "start"]
