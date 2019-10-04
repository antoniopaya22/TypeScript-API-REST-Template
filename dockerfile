############################################################
# Dockerfile Node.js - Express
############################################################

FROM node

# Información de Metadata
LABEL "com.antoniopg.apiRest"="apiRest"
LABEL maintainer="antonioalfa22@gmail.com"
LABEL version="1.0"


# Crear directorio de trabajo
RUN mkdir -p /opt/app

WORKDIR /opt/app

RUN npm install -g nodemon

# Copia la Aplicación
COPY . .

RUN npm install --quiet

EXPOSE 8000

# Inicia la aplicación al iniciar al contenedor
#nodemon -L --watch . app.js
#CMD nodemon --ext ts --exec ts-node --delay 3 ./src/server.ts 
CMD npm run start-dev
