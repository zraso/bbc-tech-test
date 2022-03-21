import DataAccessObject from "../libs/dataAccessObject";
import * as express from "express";
import axiosInstance from "axios";

const countries = async (req: express.Request, res: express.Response) => {
  try {
    if (!req.body.country) {
      throw Error();
    }

    const headlines = DataAccessObject.getHeadlines(req.body.country);

    return headlines;
  } catch (error) {
    res.status(400).send();
  }
};

export default countries;