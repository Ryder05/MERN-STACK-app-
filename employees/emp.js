const express = require('express')
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({
  extended: true
}));

const employees = [
    { empID:1 , fullname:"OSAMA MHIRI", salary:3000 },
    { empID:2 , fullname:"YUSUF BASSA", salary:0 },
    { empID:3 , fullname:"YESSIN SID YUSUF", salary:9999 }
    ]
router.get('/',(req,res)=>{
    res.send("<h2>Mohamed Oussema MHiri</h2>")
    console.log("Osama MHOro working on port 3000 .....")
    
    })
router.get('/',(req,res)=>{
        res.send(employees)
        })
    
router.post('/emp',(req,res)=>{
        const employee = {
            empID: req.body.id,
            fullname: req.body.fullname,
            salary: req.body.salary,
        }
        employees.push(employee);
        console.log(employee)
        res.send(employee);
    })
    
router.get('/emp/:id',(req,res)=>{
    const findemp = employees.find (element => element.empID == req.params.id);
    if(!findemp){
            res.send("THIS EMPLYOEE IS NOT FOUND")
    }
        res.send(findemp)
        })

router.put('/emp/:id',(req,res)=>{
            const findemp = employees.find (element => element.empID == req.params.id);
            if(!findemp){
                res.send("THIS EMPLYOEE IS NOT FOUND")
            }
            findemp.fullname = req.body.fullname
            res.send(findemp)
        })
module.exports = router ;