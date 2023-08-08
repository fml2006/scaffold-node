import { Request } from "express";
import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/uploads`;

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const name = file.originalname.split(" ").join("-").split(".");
    const fileNameRandom = `${name[0]}-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;