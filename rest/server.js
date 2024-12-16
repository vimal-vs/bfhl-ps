const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/process", (req, res) => {
  console.log(req.body);

  const { data, key } = req.body;
  let sum = 0;
  const calculateSum = (obj, searchKey) => {
    for (const value of Object.values(obj)) {
      if (typeof value === "object") {
        sum += calculateSum(value, searchKey);
      } else if (Array.isArray(value)) {
        sum += value
          .filter((v) => typeof v === "number")
          .reduce((a, b) => a + b, 0);
      } else if (typeof value === "number") {
        console.log("here");

        sum += value;
      }
    }
    return sum;
  };

  const result = calculateSum(data, key);
  res.json({ result });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
