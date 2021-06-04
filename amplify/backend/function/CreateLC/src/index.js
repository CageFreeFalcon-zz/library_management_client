/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_LIBRARYSTORAGE_BUCKETNAME
Amplify Params - DO NOT EDIT */

const QRCode = require("qrcode");
const { S3Client } = require("@aws-sdk/client-s3");
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { createCanvas, loadImage, Image, registerFont } = require("canvas");

exports.handler = async event => {
  const obj = {
    userid: event.username,
    name: event.name,
    department: event.department,
    yoa: event.yoa,
    course: event.course,
    islateral: event.islateral
  };
  let topmargin = 40;
  const width = 1125;
  const height = 675;

  //fonts
  registerFont("./Kalam-Bold.ttf", { family: "kalam", weight: "bold" });
  registerFont("./Kalam-Regular.ttf", { family: "kalam" });

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  // card image
  const image = await loadImage("./card.png");
  context.drawImage(image, 0, 0, width, height);

  // qrcode
  var opts = {
    type: "image/png",
    quality: 0.9,
    margin: 0,
    color: {
      dark: "#231f20",
      light: "#56c596"
    }
  };
  const url = await QRCode.toDataURL(obj.userid, opts);
  const img = new Image();
  img.onload = () => context.drawImage(img, 828, 378, 235, 235);
  img.onerror = err => {
    throw err;
  };
  img.src = url;

  //name
  let lines = [];
  context.font = "bold 60pt kalam";
  context.textAlign = "right";
  context.textBaseline = "top";
  let measures = context.measureText(obj.name);
  if (measures.width > 705) {
    let temp = obj.name.split(" ");
    lines.push(temp[0]);
    lines.push(temp[temp.length - 1]);
  } else {
    lines.push(obj.name);
  }
  lines.forEach(line => {
    let line_measures = context.measureText(line);
    context.fillStyle = "#231f20";
    context.fillRect(
      width - line_measures.width - 50,
      topmargin,
      line_measures.width + 10,
      line_measures.emHeightDescent
    );
    context.fillStyle = "#56c596";
    context.fillText(line, width - 40, topmargin);
    topmargin += line_measures.emHeightDescent;
  });

  //department and session
  let end;
  if (obj.course === "B.Tech") {
    if (obj.islateral) {
      end = +obj.yoa + 3;
    } else {
      end = +obj.yoa + 4;
    }
  } else if (obj.course === "Diploma") {
    end = +obj.yoa + 3;
  }
  context.font = "30pt kalam";
  context.fillText(
    obj.department + ", " + obj.yoa + "-" + end,
    width - 40,
    topmargin
  );

  // store file to storage
  const buffer = canvas.toBuffer("image/png");

  const uploadParams = {
    Bucket: process.env.STORAGE_LIBRARYSTORAGE_BUCKETNAME,
    Key: "public/card/" + obj.userid + ".png",
    Body: buffer
  };
  try {
    const s3Client = new S3Client({ region: process.env.REGION });
    const data = await s3Client.send(new PutObjectCommand(uploadParams));
    console.log("Success", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
