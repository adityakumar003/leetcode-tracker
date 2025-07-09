const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is live ✅");
});

app.post("/api/leetcode", async (req, res) => {
  const { username } = req.body;

  const graphql = JSON.stringify({
    query: `
      query userSessionProgress($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
            totalSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }`,
    variables: { username },
  });

  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: graphql,
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server is running and listening on port ${PORT}`);
});
