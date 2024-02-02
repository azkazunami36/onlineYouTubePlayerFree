import express from "express";
import https from "https";
import fs from "fs";

import SumLibrary from "./variousLibrary/sumLibrary.js";
import bodyParser from "body-parser";
const ytdl = SumLibrary.externalModules.ytdl;

// このプログラムは綺麗に作られていません。
// 完成を高速でできるよう適当に作成したため、拡張性がない恐れがありますが、ご了承ください。
// if文などが多く占めている可能性があります。

const expressApp = express();

const server = https.createServer(expressApp);

expressApp.use(bodyParser.urlencoded({ limit: "127gb", extended: true }));

const basePath = "/dataFolder"

if (fs.existsSync(basePath)) fs.rmdirSync(basePath)

expressApp.get("*", (req, res) => {
    const URL = req.url;
    

});
