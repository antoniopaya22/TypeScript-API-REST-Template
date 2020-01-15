# TypeScript-API-REST-Template

[![Build Status](https://travis-ci.com/antonioalfa22/TypeScript-API-REST-Template.svg?branch=master)](https://travis-ci.com/antonioalfa22/TypeScript-API-REST-Template)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![NPM version](https://badge.fury.io/js/badge-list.svg)](https://github.com/antonioalfa22/TypeScript-API-REST-Template)
[![star this repo](http://githubbadges.com/star.svg?user=antonioalfa22&repo=TypeScript-API-REST-Template&style=flat)](https://github.com/antonioalfa22/TypeScript-API-REST-Template)
[![fork this repo](http://githubbadges.com/fork.svg?user=antonioalfa22&repo=TypeScript-API-REST-Template&style=flat)](https://github.com/antonioalfa22/TypeScript-API-REST-Template/fork)


## Build
```docker
docker build . -t api-rest:latest
```

## Run
```docker
sudo docker run api-rest
```

## ORM Migration

```
typeorm migration:run -n {migrationName}
```

## ORM config examples

```json
[
  {
    "skip": false,
    "name": "mysql",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "admin",
    "database": "test",
    "logging": false
  },
  {
    "skip": false,
    "name": "mariadb",
    "type": "mariadb",
    "host": "localhost",
    "port": 3307,
    "username": "root",
    "password": "admin",
    "database": "test",
    "logging": false
  },
  {
    "skip": false,
    "name": "sqlite",
    "type": "sqlite",
    "database": "temp/sqlitedb.db",
    "logging": false
  },
  {
    "skip": false,
    "name": "postgres",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "test",
    "password": "test",
    "database": "test",
    "logging": false
  },
  {
    "skip": true,
    "name": "mssql",
    "type": "mssql",
    "host": "localhost",
    "username": "sa",
    "password": "Admin12345",
    "database": "tempdb",
    "logging": false
  },
  {
    "skip": true,
    "name": "oracle",
    "type": "oracle",
    "host": "localhost",
    "username": "system",
    "password": "oracle",
    "port": 1521,
    "sid": "xe.oracle.docker",
    "logging": false
  },
  {
    "skip": false,
    "name": "cockroachdb",
    "type": "cockroachdb",
    "host": "localhost",
    "port": 26257,
    "username": "root",
    "password": "",
    "database": "defaultdb"
  },
  {
    "skip": false,
    "name": "sap",
    "type": "sap",
    "host": "192.168.56.102",
    "port": 39015,
    "username": "SYSTEM",
    "password": "MySuperHanaPwd123!",
    "database": "HXE",
    "logging": false
  },
  {
    "skip": false,
    "disabledIfNotEnabledImplicitly": true,
    "name": "mongodb",
    "type": "mongodb",
    "database": "test",
    "logging": false,
    "useNewUrlParser": true,
    "useUnifiedTopology": true
  }
]
```