import { InternalServerError, MethodNotAllowedError } from "infra/errors.js";
import { logger } from "infra/logger";

function onNoMatchHandler(request, response) {
  const publicErrorObject = new MethodNotAllowedError();

  logger.warn(
    {
      path: request.url,
      method: request.method,
      statusCode: publicErrorObject.statusCode,
    },
    publicErrorObject.message,
  );

  response.status(publicErrorObject.statusCode).json(publicErrorObject);
}

function onErrorHandler(error, request, response) {
  if (
    error.name === "ValidationError" ||
    error.name === "NotFoundError" ||
    error.name === "TooManyRequestsError"
  ) {
    logger.warn(
      {
        path: request.url,
        method: request.method,
        statusCode: error.statusCode,
      },
      error.message,
    );

    return response.status(error.statusCode).json(error);
  }

  const publicErrorObject = new InternalServerError({
    statusCode: error.statusCode,
    cause: error,
  });

  logger.error(
    {
      err: error,
      path: request.url,
      method: request.method,
      statusCode: publicErrorObject.statusCode,
    },
    publicErrorObject.message,
  );

  response.status(publicErrorObject.statusCode).json(publicErrorObject);
}

const controller = {
  errorHandler: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
};

export default controller;
