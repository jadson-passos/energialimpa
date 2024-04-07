import request from 'supertest'
import app from '../server'

const cliente = {
    "numeroDoDocumento": "14041737706",
    "tipoDeConexao": "bifasico",
    "classeDeConsumo": "comercial",
    "modalidadeTarifaria": "convencional",
    "historicoDeConsumo": [
        3878, // mes atual
        9760, // mes anterior
        5976, // 2 meses atras
        2797, // 3 meses atras
        2481, // 4 meses atras
        5731, // 5 meses atras
        7538, // 6 meses atras
        4392, // 7 meses atras
        7859, // 8 meses atras
        4160, // 9 meses atras
        6941, // 10 meses atras
        4597  // 11 meses atras
    ]
}

it('teste url raiz', async () => {
    const res = await
        request(app).get("/");
    expect(res.status).toEqual(200);
    expect(res.get('Content-type')).toContain('application/json; charset=utf-8');
    expect(res.body).toEqual({ "message": "Teste - Backend Lemon - Elegibilidade" });
});


it('teste error ao acessar serviço novo cliente', async () => {
    const res = await
        request(app).post("/api/novoCliente");
    expect(res.status).toEqual(500);
    expect(res.get('Content-type')).toContain('text/html; charset=utf-8');
    expect(res.body).toEqual({});
});

