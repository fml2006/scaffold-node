import { Router } from 'express';
import { createRole, getRole, getRoles } from '../controllers/roles';
import { checkRole } from '../middleware/role';
import { checkSession } from '../middleware/session';

const router = Router();

router.get('/', getRoles );
router.get('/:id', getRole );
router.post('/', [checkSession, checkRole(['admin'])], createRole );

export { router };