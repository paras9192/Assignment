import express from "express";
import config from "./configs/configuration";
import bodyParser from "body-parser";
import {flights} from "../assignmentBookingApp/src/flightDb/flight";

const app = express();
app.use(bodyParser.json());

type GetFlightRequestBody = {
    source: string;
    destination: string;
    date: string;
};
app.post("/flight", (req, res) => {
    const requestBody = req.body as GetFlightRequestBody;
    const {source, destination, date} = requestBody;
    const filteredFlights = flights.filter((flight) => {
        return flight.departure === source && flight.destination === destination && flight.date === date;
    });
    res.send(filteredFlights);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(config.PORT, () => {
  console.log("Server is running on port 3000");
});
