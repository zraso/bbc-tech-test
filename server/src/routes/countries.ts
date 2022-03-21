import DataAccessObject from "../libs/dataAccessObject";
import * as express from "express";

const countries = (req: express.Request, res: express.Response) => {
  try {
    // error handling

    // access data access object
  } catch (error) {
    res.status(400).send();
  }
};

export default countries;
