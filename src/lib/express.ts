import express from 'express';

// express.urlencoded({ extended: true }) uu
export const app = express()
  // parse incoming requests with JSON payloads; adds body property to request.
  .use(express.json())
  // parse incoming HTTP request with URL-encoded payloads; adds body property to request.
  .use(express.urlencoded({ extended: true }));

// Create new Router object.
// export const router = express.Router();
