import { PrismaClient, Prisma } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
export class TblController {
  
  async create(req: Request, res: Response) {
    try {
      res.status(201).json({
        message: "my create OK",
        reqBody: req.body
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
async findAll(req: Request, res: Response) {
    try {
      const data = await prisma.user.findMany();
      res.status(200).json(data);
    } catch (err) {
      console.error(err)
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
async findOne(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "my findOne OK! Table name:",
        reqParamId: req.params.id
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
async update(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "my update OK",
        reqParamId: req.params.id,
        reqBody: req.body
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
async delete(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "my delete OK",
        reqParamId: req.params.id
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
}
