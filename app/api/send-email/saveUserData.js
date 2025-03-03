export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const { name, phone } = req.body;
        console.log("New User:", { name, phone });
  
        // Save to database (Example: Firebase, MongoDB, MySQL)
        // db.collection("users").add({ name, phone, timestamp: new Date() });
  
        return res.status(200).json({ success: true, message: "User data saved!" });
      } catch (error) {
        console.error("Error saving data:", error);
        return res.status(500).json({ success: false, message: "Server error" });
      }
    }
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
  