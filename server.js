const express = require('express')
const path = require('path')
const app = express()
const chalk = require('chalk')
const winston = require('winston');
const expressWinston = require('express-winston');
// const DailyRotateFile = require('winston-daily-rotate-file');
const log4js = require('log4js')

const port = 3389

// DailyRotateFileTransport = (fileName) => {
//   return new (winston.transports.DailyRotateFile)({
//     // filename: path.join(process.env.LOGPATH, `${fileName}-%DATE%.log`),
//     filename: `logs/${fileName}-%DATE%.log`,
//     datePattern: 'YYYY-MM-DD-HH',
//     // maxSize: '20m',
//     maxFiles: '7d',
//     timestamp: () => new Date().format('yyyy-MM-dd hh:mm:ss.S')
//   })
// }

// app.use(expressWinston.logger({
//   transports: [
//     DailyRotateFileTransport('page-request')
//   ],
//   meta: true, // optional: control whether you want to log the meta data about the request (default to true)
//   msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
//   expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
//   colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
//   ignoreRoute: function (req, res) {
//     // 只打印页面请求信息
//     let notPageRequest = false
//     let ignoreArr = ['/api', '.js', '.css', '.png', '.jpg', '.gif']
//     ignoreArr.forEach(item => {
//       if (req.url.indexOf(item) > -1) notPageRequest = true
//     })
//     return notPageRequest
//   } // optional: allows to skip some log messages based on request and/or response
// }));

// let apiRequestLogger = (req, res, next) => {
//   let send = res.send
//   let content = ''
//   let query = req.query || {}
//   let body = req.body || {}
//   res.send = function () {
//     content = arguments[0]
//     send.apply(res, arguments)
//   }
//   expressWinston.logger({
//     transports: [
//       DailyRotateFileTransport('api-request')
//     ],
//     meta: true, // optional: control whether you want to log the meta data about the request (default to true)
//     msg () {
//       return `HTTP ${req.method} ${req.url} query ${JSON.stringify(query)} body ${JSON.stringify(body)} resData ${content} `
//     },
//     colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
//     ignoreRoute: function (req, res) {
//       if (req.headers.self) return true
//       return false
//     } // optional: allows to skip some log messages based on request and/or response
//   })(req, res, next)
// }

const filenameDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  return `${year}-${month}-${day}`;
}

log4js.configure({
  appenders: {
    out: { type: 'console' }, //控制台输出  
    app: {
        type: "dateFile",
        filename: `logs/${filenameDate()}.log`,
        pattern: "-yyyy-MM-dd",
        alwaysIncludePattern: false,
    } // 日期文件格式  
  },
  categories: {
    default: { appenders: ['out'], level: 'info' },
    logFile: { appenders: ['out', 'app'], level: 'ALL' },
  },
  replaceConsole: true,   //替换console.log  
});

const fileLog = log4js.getLogger('logFile');

app.use(log4js.connectLogger(fileLog));

// 正常请求的日志
app.use(expressWinston.logger({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/success.log'
    })
  ]
}));

// 错误请求的日志
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/error.log'
    })
  ]
}));
 
app.use(express.static(path.join(__dirname, 'public')))
 
app.listen(port, () => {
  console.log(`${chalk.black.bold.bgGreen(` INFO `)} Your server is running here: http://localhost:${port}/`)
})
