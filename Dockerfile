FROM node:18
WORKDIR /root/rudhra/
# Install necessary dependencies for 'canvas'
RUN apt-get update && apt-get install -y \
  build-essential \
  libcairo2-dev \
  libpango1.0-dev \
  libjpeg-dev \
  libgif-dev \
  librsvg2-dev

COPY package.json ./

# Install Node.js dependencies
RUN npm install

RUN apt install fontconfig

COPY . .
CMD ["npm", "start"]
