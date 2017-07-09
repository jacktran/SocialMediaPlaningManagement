var gulp = require("gulp");
var fs = require('fs');
var ts = require("gulp-typescript");
var tsProject = ts.createProject('tsconfig.json');

// gulp.task("default", function () {
//     // should to create new project here.
//     // You can't use the same project in multiple tasks.
//     // Instead, create multiple projects or use a single task to compile your sources.
//     var tsProject = ts.createProject('tsconfig.json');
//     tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest("dist"));
// });
//
// gulp.task('watch', ['default'], function() {
//     gulp.watch('app/**/*', ['default']);
// });


gulp.task('scripts', () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
    gulp.watch('src/app/**/*.ts', ['scripts']); 
});

gulp.task('default', ['watch']);