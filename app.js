const express = require("express");
const QRCode = require("qrcode");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { qrCodeSrc: null, error: null });
});

app.post("/generate", (req, res) => {
  const url = req.body.url;
  if (!url) {
    return res.render("index", {
      qrCodeSrc: null,
      error: "Please provide a valid URL",
    });
  }

  QRCode.toDataURL(url, (err, src) => {
    if (err) {
      return res.render("index", {
        qrCodeSrc: null,
        error: "Error generating QR code",
      });
    }
    res.render("index", { qrCodeSrc: src, error: null });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
