var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");
var path = require("path");
var fs = require("fs");
var url = require("url");
var clean = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");

//css压缩
// gulp.task("clean", function() {
//     return gulp.src("./public/css/style.css")
//         .pipe(clean())
//         .pipe(gulp.dest("./public/css"))
// });

// es5压缩
// gulp.task("uglify", function() {
//     return gulp.src("./public/js/*.js")
//         .pipe(uglify())
//         .pipe(gulp.dest("./public/js"))
// })

//es6压缩
// gulp.task("babel", function() {
//     return gulp.src("./public/js/*.js")
//         .pipe(babel({
//             presets: "es2015"
//         }))
//         .pipe(uglify())
//         .pipe(gulp.dest("./public/js"))
// })

//转译sass
// gulp.task("sass", function() {
//     return gulp.src("./public/scss/style.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("./public/css"))
// });

//监听
// gulp.task("watchs", function() {
//     return gulp.watch("./public/scss/style.scss", gulp.series("sass"))
// })

//起服务
// gulp.task("web", function() {
//     return gulp.src("public")
//         .pipe(webserver({
//             port: 8989,
//             open: true,
//             middleware: function(req, res) {
//                 var pathname = url.parse(req.url).pathname;
//                 if (pathname == "/favicon.ico") {
//                     res.end("");
//                     return;
//                 }
//                 pathname = pathname == "/" ? "index.html" : pathname;
//                 res.end(fs.readFileSync(path.join(__dirname, "public", pathname)))
//             }
//         }))
// })