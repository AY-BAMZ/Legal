# Clone Image from Docker Hub
FROM node:16.15.0

# Set Working directory
WORKDIR /app/legal

# Copy project Files into working Directory
COPY ./ ./

# Install Dependeccies
RUN npm install

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 80

# Access to Bash Shell
CMD ["/bin/bash"]
