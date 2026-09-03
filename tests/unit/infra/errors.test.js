import {
  InternalServerError,
  ServiceError,
  ValidationError,
  NotFoundError,
  MethodNotAllowedError,
  TooManyRequestsError,
} from "infra/errors.js";

describe("infra/errors.js", () => {
  describe("InternalServerError", () => {
    test("deve instanciar com valores padrão", () => {
      const error = new InternalServerError({});
      expect(error.name).toBe("InternalServerError");
      expect(error.message).toBe("Um erro interno não esperado aconteceu.");
      expect(error.action).toBe("Entre em contato com o suporte.");
      expect(error.statusCode).toBe(500);

      const json = error.toJSON();
      expect(json).toEqual({
        name: "InternalServerError",
        message: "Um erro interno não esperado aconteceu.",
        action: "Entre em contato com o suporte.",
        status_code: 500,
      });
    });

    test("deve aceitar statusCode customizado", () => {
      const error = new InternalServerError({ statusCode: 502 });
      expect(error.statusCode).toBe(502);
    });
  });

  describe("ServiceError", () => {
    test("deve instanciar com valores padrão e customizados", () => {
      const errorDefault = new ServiceError({});
      expect(errorDefault.message).toBe("Serviço indisponível no momento.");
      expect(errorDefault.statusCode).toBe(503);

      const errorCustom = new ServiceError({
        message: "Banco de dados indisponível.",
      });
      expect(errorCustom.message).toBe("Banco de dados indisponível.");
      expect(errorCustom.toJSON()).toEqual({
        name: "ServiceError",
        message: "Banco de dados indisponível.",
        action: "Verifique se o serviço está disponível.",
        status_code: 503,
      });
    });
  });

  describe("ValidationError", () => {
    test("deve instanciar corretamente", () => {
      const error = new ValidationError({
        message: "Dado inválido.",
        action: "Corrija o campo.",
      });
      expect(error.name).toBe("ValidationError");
      expect(error.statusCode).toBe(400);
      expect(error.toJSON()).toEqual({
        name: "ValidationError",
        message: "Dado inválido.",
        action: "Corrija o campo.",
        status_code: 400,
      });
    });
  });

  describe("NotFoundError", () => {
    test("deve instanciar corretamente", () => {
      const error = new NotFoundError({});
      expect(error.name).toBe("NotFoundError");
      expect(error.statusCode).toBe(404);
      expect(error.toJSON()).toEqual({
        name: "NotFoundError",
        message: "Não foi possível encontrar este recurso no sistema.",
        action: "Verifique se os parâmetros enviados na consulta estão certos.",
        status_code: 404,
      });
    });
  });

  describe("MethodNotAllowedError", () => {
    test("deve instanciar corretamente", () => {
      const error = new MethodNotAllowedError();
      expect(error.statusCode).toBe(405);
      expect(error.toJSON()).toEqual({
        name: "MethodNotAllowedError",
        message: "Método não permitido para este endpoint.",
        action:
          "Verifique se o método HTTP enviado é válido para este endpoint.",
        status_code: 405,
      });
    });
  });

  describe("TooManyRequestsError", () => {
    test("deve instanciar com defaults e parâmetros customizados", () => {
      const errorDefault = new TooManyRequestsError();
      expect(errorDefault.statusCode).toBe(429);
      expect(errorDefault.action).toContain("60 seconds");

      const errorCustom = new TooManyRequestsError({
        action: "Aguarde.",
        ttl: 30,
      });
      expect(errorCustom.action).toBe("Aguarde.");
    });
  });
});
