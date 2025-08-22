const express = require('express')
const router = express.Router();
const Person = require('./../models/person');
router.post('/', async(req,res)=>{
    

    // callback .........................
    // const data = req.body ;  // body parser -> then it store in req.body 

    // // create a person type data 
    // const newPerson = new person(data);
    // newPerson.save((error, savedperson) => {
    //     if(error){
    //         console.log("Error in saving person data", error);
    //         res.status{500}.json({error: "Internal server error"});
    //     }else{
    //         console.log("Data saved successfully");
    //         res.status{200}.json(person);
    //     }
    // })

    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Server internal error"});
    }
});

// fetch the data from the database 
router.get('/', async(req, res) => {
    try{
        const data = await Person.find();
        console.log("Data fetched successfully");
        res.status(200).json(data);

    }catch(err){
        console.log("Error occured");
        res.status(500).json({error: "Server Internal error"});
    }
})

// parameterised url 
router.get('/:worktype',async (req, res) => {
    
    try{
        const worktype = req.params.worktype;
        if(worktype == 'chef' || worktype == 'manager' || worktype == 'waiter'){
            const response = await Person.find({work: worktype});
            console.log("Work details fetched sucessfully");
            res.status(200).json(response);
        }else{
            res.status(404).json({error: "Invalid work type"});
        }
    }
    catch(err){
        console.log("Some Error Occured");
        res.status(500).json({error: "Server Internal Error"});
    }
});

router.put('/:id' ,async (req, res) =>{
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new : true,  // return the updated value 
            runValidators : true, // run mongoose validators 
        }); 

        if(!response){
            return res.status(404).json({error : "Data not found"});
        }

        console.log("Your data updated");
        res.status(200).json(response);
        
    }catch(err){
        console.log("Internal server error");
        res.status(500).json({error: "Error Occured"});
    }
})
module.exports = router;

