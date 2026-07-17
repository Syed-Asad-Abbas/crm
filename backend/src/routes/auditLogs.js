import express from 'express';
import { getAuditLogs, createAuditLog } from '../controllers/auditLogsController.js';

const router = express.Router();

router.get('/', getAuditLogs);
router.post('/', createAuditLog);

export default router;
