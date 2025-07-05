import router from "../Router/index.js";
import app from "./app.js";

const PORT = 8080 || 8081

app.use(router)

app.listen(PORT, () => {
    console.log("Sever running on port : 8080")
})