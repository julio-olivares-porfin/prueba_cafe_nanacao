# Prueba Café Nanacao
## Julio Olivares

### Dependencias utilizadas en el backend

```json
    "dependencies": {
      "express": "^4.21.1",
      "jest": "^28.1.3",
      "pg": "^8.13.1",
      "supertest": "^6.3.4"
    }
```
# TESTING

1. Ruta GET
    1. ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto.

2. Ruta DELETE
    1. se obtiene un código 404 al intentar eliminar un café con un id que no existe.

3. Ruta POST
    1. ruta POST /cafes agrega un nuevo café y devuelve un código 201.

4. Ruta PUT
    1. ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload.


## Resumen Test

|    Tests     |   Status   |
| ------------ |:----------:|
| ruta GET     | passed     |
| ruta DELETE  | passed     |
| ruta POST    | passed     |
| ruta PUT     | passed     |



test imagen

![This is an alt text.](/image/sample.webp "This is a sample image.")