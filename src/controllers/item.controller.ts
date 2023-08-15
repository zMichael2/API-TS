import { Request, Response } from "express";
import { handleHttp } from "../helpers/error.handle";
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from "../services/item.service";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // (/:id)
    const response = await getCar(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM", e);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_HET_ITEMS", e);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { ...dataCar } = req.body;
    const response = await updateCar(id, dataCar);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM", e);
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseItem = await insertCar(body);
    res.status(201).send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // (/:id)
    const response = await deleteCar(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM", e);
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
