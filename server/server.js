const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsdGd5enZlYWV4b2hpbWFpZHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMzE4MDksImV4cCI6MjA2MDkwNzgwOX0.um5n5-Cy8i_PN22jR95wME75hlDw4Oe27ZtbmlRXpQY
// https://dltgyzveaexohimaidvi.supabase.co URL
// JWT_sectre BJ5wlBYFf4XBma6/Dim811X1DzCWkw5dEtm25WOebOJqecKk5j38LaZUZ/P2rleIU8hgdfxu8K80EnjsHr9IXw==