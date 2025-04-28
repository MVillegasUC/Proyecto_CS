// register.test.js

const { validarEmail, validarPasswords } = require('./registerFunctions'); // Asumiendo que exportas funciones en un archivo separado

describe('Pruebas de validación de registro', () => {
    
    test('Debe validar correctamente un correo electrónico válido', () => {
        expect(validarEmail('usuario@example.com')).toBe(true);
    });

    test('Debe rechazar un correo electrónico inválido', () => {
        expect(validarEmail('usuario@com')).toBe(false);
    });

    test('Debe validar que las contraseñas coincidan', () => {
        expect(validarPasswords('abc123', 'abc123')).toBe(true);
    });

    test('Debe rechazar si las contraseñas no coinciden', () => {
        expect(validarPasswords('abc123', 'abc124')).toBe(false);
    });

});
