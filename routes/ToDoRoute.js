const {Router} = require('express');


const router = Router();

//import all routes into ToDo controller here.
const { getToDo, saveToDo, deleteToDo, updateToDo } = require('../controllers/ToDoController');



// create individual route here.
router.get('/', getToDo);
router.post('/save', saveToDo);
router.delete('/delete', deleteToDo);
router.put('/update', updateToDo);

// import  replace (req, res) => {res.json('...') to controller and here replace with getToDo
module.exports = router;
