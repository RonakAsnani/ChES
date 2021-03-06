import express from 'express';
import { getArticles, getArticle, createArticle, updateArticle, deleteArticle, likeArticle } from '../controllers/article.js';
import multer from "multer";
import auth from '../middleware/auth.js';

const router = express.Router();

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
        }
        cb(null, true)
    }
});

const upload = multer({ storage: storage }).single("file");

router.post("/uploadfiles", (req, res) => {
    upload(req, res, err => {
        if (err) {
            console.log(err);
            return res.json({ success: false, err });
        }
        console.log(res.req.file.path);
        return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename });
    });
});

router.get('/', getArticles);
router.get('/:id', getArticle);
router.post('/', auth, createArticle);
router.patch('/:id', auth, updateArticle);
router.delete('/:id', auth, deleteArticle);
router.patch('/:id/likeArticle', likeArticle);

export default router;