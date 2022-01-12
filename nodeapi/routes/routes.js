// Load the MySQL pool connection
const pool = require("../data/config");

// Route the app
const router = (app) => {
  // Display welcome message on the root

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    next();
  });

  app.get("/", (request, response) => {
    response.send({
      message: "Welcome to the Node.js Express REST API!",
    });
  });

  // Display all Services
  app.get("/services", (request, response) => {
    pool.query("SELECT * FROM services", (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Display a single service by ID
  app.get("/services/:service_id", (request, response) => {
    const service_id = request.params.service_id;

    pool.query(
      "SELECT * FROM services WHERE service_id = ?",
      service_id,
      (error, result) => {
        if (error) throw error;

        response.send(result);
      }
    );
  });

  // Add a new service
  app.post("/services", (request, response) => {
    console.log(request.body);
    pool.query("INSERT INTO services SET ?", request.body, (error, result) => {
      if (error) throw error;

      response.status(201).send(`User added with ID: ${result.insertId}`);
    });
  });

  // Update an existing service
  app.put("/services/:service_id", (request, response) => {
    const service_id = request.params.service_id;

    pool.query(
      "UPDATE services SET ? WHERE service_id = ?",
      [request.body, service_id],
      (error, result) => {
        if (error) throw error;

        response.send("User updated successfully.");
      }
    );
  });

  // Delete a service
  app.delete("/services/:service_id", (request, response) => {
    const service_id = request.params.service_id;

    pool.query(
      "DELETE FROM services WHERE service_id = ?",
      service_id,
      (error, result) => {
        if (error) throw error;
        response.send("User deleted.");
      }
    );
  });
};

// Export the router
module.exports = router;
