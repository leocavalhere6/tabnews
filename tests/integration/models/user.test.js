import user from "models/user.js";
import { NotFoundError, ValidationError } from "infra/errors.js";

describe("models/user.js", () => {
  test("findOneByUsername com username inexistente deve lançar NotFoundError", async () => {
    await expect(
      user.findOneByUsername("non_existent_username_12345"),
    ).rejects.toThrow(NotFoundError);
  });

  test("create com email ou username duplicados deve lançar ValidationError", async () => {
    const userData = {
      username: "unique_user_model",
      email: "unique_model@example.com",
      password: "password123",
    };

    await user.create(userData);

    await expect(
      user.create({ ...userData, username: "another_user" }),
    ).rejects.toThrow(ValidationError);

    await expect(
      user.create({ ...userData, email: "another@example.com" }),
    ).rejects.toThrow(ValidationError);
  });
});
