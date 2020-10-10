const ecpress = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransaction } = require('../Controllers/Transactions');

router
   .route('/')
   .gt(getTransactions)
   .post(addTransactions);

   router 
   .route('/:id')
   .delete(deleteTransaction);
   
module.express = router;