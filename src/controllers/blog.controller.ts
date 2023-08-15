import { Request, Response } from "express";
import { handleHttp } from "../helpers/error.handle";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_HET_BLOG");
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_BLOG");
  }
};

const postItem = (req: Request, res: Response) => {
  try {
    const { body } = req;
    res.status(201).send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_BLOG");
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_BLOG");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
