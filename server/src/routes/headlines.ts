import DataAccessObject from "../libs/dataAccessObject";
import * as express from "express";
import axiosInstance from "axios";

const headlines = async (req: express.Request, res: express.Response) => {
  try {
    if (!req.body.country) {
      throw Error();
    }

    const record = DataAccessObject.getHeadlines(req.body.country);

    return record;
  } catch (error) {
    res.status(400).send();
  }
};

export default headlines;