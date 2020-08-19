import {Router} from 'express';
const router = Router();

//Database Connection
import {connect} from '../database';
import {ObjectID} from 'mongodb'

router.get('/',async(req,res)=>{
	const db = await connect();
	const result = await db.collection('tasks').find({}).toArray();
	res.json(result)
})

router.post('/',async (req,res)=>{
	const db = await connect();
	const {title,description} = req.body;
	const task ={
		title,
		description
	};
	const result = await db.collection('tasks').insertOne(task);
	res.json(result.ops[0]);
});

router.get('/:id',async (req,res)=>{
	const {id} =req.params;
	const idObject = ObjectID(id); 
	const db = await connect();
	const result = db.collection('tasks').findOne({ _id:idObject});
	res.json(result);
});

router.delete ('/:id',async (req,res) =>{
	const {id} =req.params;
	const idObject = ObjectID(id); 
	const db = await connect();
	const result = db.collection('tasks').removeOne({ _id:idObject});
	res.redirect('/tasks');
})

export default router; 