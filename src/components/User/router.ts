import { Router } from "express";
import UserComponent from './index';

const router = Router();


router.get('/', UserComponent.findAll);


router.get('/:id', UserComponent.findById);


router.post('/', UserComponent.create);


router.put('/', UserComponent.updateById);


router.delete('/', UserComponent.deleteById);

export = router;