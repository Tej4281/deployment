// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const cors = require('cors');
// const app = express();
// app.use(bodyParser.json());

// app.use(cors({
//   origin: ['http://localhost:4200'],
//   "methods": "GET,PUT,POST",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204,
//   credentials: true
// }));

// app.use(cors());
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   port:'3000',
//   password: '',
//   database: 'info'
// });
// connection.connect();

// app.post('/submit',   (req, res) => {


//   const { name, email, message , service ,phone} = req.body;
//   connection.query(
//     'INSERT INTO contact_form (name, email, message ,service ,phone) VALUES (?, ?, ?, ?, ?)',
//     [name, email, message, service, phone],
//     (err) => {
//       if (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Error saving message' });
//       }
//       else {
//         res.json({ message: 'Message saved' });
//       }
//     }
//   );
// });

// app.listen(3000, () => {
//   console.log('Server started on http://127.0.0.1:3000');
// });






// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const cors = require('cors')

// const app = express();
// app.use(bodyParser.json());


// app.use(cors())

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   port: '3000',
//   password: 'root',
//   database: 'info'
// });



// app.post('/submit',(req, res) => {
//   const { name, email, phone, service ,message } = req.body;
//   connection.query(
//     'INSERT INTO contact_form (name, email, phone , service,message) VALUES (?, ?, ?, ?, ?)',
//     [name, email, phone, service, message,],
//     (err) => {
//       if (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Error saving message' });
//       } else {
//         res.json({ message: 'Message saved' });
//       }
//     }
//   );
// });

// app.listen(3000, () => {
//   console.log('Server started on http://localhost:3000');
// });


const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

var cors = require('cors')
app.use(cors())

const connection = mysql.createConnection({
  host: '127.0.0.1 ',
  user: 'jaishevkar@localhost',
  password: 'Re@942069',
  database: 'jaishevkar_info'
});



app.post('/submit', (req, res) => {
 

  const { name, email, message, phone, service } = req.body;
  connection.query(
    'INSERT INTO messages (name, email, message, phone, service) VALUES (?, ?, ?, ?, ?)',
    [name, email, message, phone, service],
    (err, results) => { 
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Error saving message' });
      } else {
        res.json({ message: 'Message saved' });
      }
    }
  );
});



app.listen(3306, () => {
  console.log('Server started on http://localhost:3306');
});