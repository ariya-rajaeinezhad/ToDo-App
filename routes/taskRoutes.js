
const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/', taskController.deleteAllTasks);

module.exports = router;