// File: project-be/server.js
import express from "express";
import cors from "cors";

const app = express();
// Bật CORS để cho phép Frontend (từ Netlify) gọi API
app.use(cors()); 
app.use(express.json());

// Route POST xử lý dữ liệu từ Frontend
app.post("/", (req, res) => {
    const receivedMessage = req.body.message || "Không có dữ liệu gửi kèm";

    // Trả về dữ liệu JSON
    res.json({ 
        status: "success",
        received: receivedMessage,
        response: `Render Backend đã nhận và phản hồi: "${receivedMessage}"`
    });
});

// Định nghĩa cổng linh hoạt cho môi trường Render
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Backend đang chạy trên cổng ${PORT}`);
});