FROM node:18

# Set working directory
WORKDIR /root/rudhra/

# Install necessary dependencies for 'canvas' and other libraries
RUN apt-get update && apt-get install -y --no-install-recommends \
  build-essential \
  libcairo2-dev \
  libpango1.0-dev \
  libjpeg-dev \
  libgif-dev \
  librsvg2-dev \
  fontconfig \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install Node.js dependencies using npm ci if lockfile exists, else fallback to npm install
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy the rest of the application code
COPY . .

# Expose the port (optional if your app listens on a specific port, e.g., 3000)
# EXPOSE 3000

# Command to run your app (replace this with your actual start script)
# CMD ["npm", "start"]
