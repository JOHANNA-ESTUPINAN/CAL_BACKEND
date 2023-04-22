const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.post(
    '/api/sumar',
    (req, resp) => {
        console.log(req.body);
        const nums = req.body.numbers_to_operate;
        let sum = 0;
        for (i in nums) {
            var num = parseFloat(nums[i]);
            console.log(num);
            sum = sum + num;
        }
        console.log(sum);

        resp.json({"result": sum});
    }
);

app.post(
    '/api/restar',
    (req, resp) => {
        const nums = req.body.numbers_to_operate;
        const first_num = parseFloat(nums.shift());
        let rest = first_num;
        for (i in nums) {
            var num = parseFloat(nums[i]);
            console.log(num);
            rest = rest - num;
        }
        console.log(rest);

        resp.json({"result": rest});
    }
)


app.post(
    '/api/multiplicar',
    (req, resp) => {
        const nums = req.body.numbers_to_operate;
        const first_num = parseFloat(nums.shift());
        let multi = first_num;
        for (i in nums) {
            var num = parseFloat(nums[i]);
            console.log(num);
            multi = multi * num;
        }
        console.log(multi);

        resp.json({"result": multi});
    }
)


app.post(
    '/api/dividir',
    (req, resp) => {
        const nums = req.body.numbers_to_operate;
        const first_num = parseFloat(nums.shift());
        let div = first_num;
        for (i in nums) {
            var num = parseFloat(nums[i]);
            console.log(num);
            div = div / num;
        }
        console.log(div);

        resp.json({"result": div});
    }
)

app.listen(
    3000, () => {
        console.log("Server started on port 3000")
    }
)
