import { createUserSchema } from "models/user-schema";

describe("models/user-schema.ts", () => {
  test("deve validar um payload de usuário válido", () => {
    const validData = {
      username: "valid_user123",
      email: "valid@example.com",
      password: "password123",
    };

    const result = createUserSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  describe("validação do username", () => {
    test("deve rejeitar username com menos de 3 caracteres", () => {
      const result = createUserSchema.safeParse({
        username: "ab",
        email: "test@example.com",
        password: "password123",
      });
      expect(result.success).toBe(false);
    });

    test("deve rejeitar username com caracteres especiais não permitidos", () => {
      const result = createUserSchema.safeParse({
        username: "user@invalid!",
        email: "test@example.com",
        password: "password123",
      });
      expect(result.success).toBe(false);
    });
  });

  describe("validação do email", () => {
    test("deve rejeitar formato de email inválido", () => {
      const result = createUserSchema.safeParse({
        username: "validuser",
        email: "invalid-email",
        password: "password123",
      });
      expect(result.success).toBe(false);
    });
  });

  describe("validação da senha", () => {
    test("deve rejeitar senha com menos de 8 caracteres", () => {
      const result = createUserSchema.safeParse({
        username: "validuser",
        email: "test@example.com",
        password: "123",
      });
      expect(result.success).toBe(false);
    });
  });
});
