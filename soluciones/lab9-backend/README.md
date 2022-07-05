# Laboratorio 9 - Backend 

## Configuración de mongo

Ejecutar en una terminal: 
```
docker run -d --rm --name lab8-mongodb \
      -e MONGO_INITDB_ROOT_USERNAME=admin \
      -e MONGO_INITDB_ROOT_PASSWORD=password \
      -p 27017:27017 \
      -v db:/data/db \
      mongo
```