var gulp = require('gulp');
var ts = require('gulp-typescript');

var del = require("del");
var concat = require('gulp-concat');


	//Config = require('./gulpfile.config'),
	//tsProject = tsc.createProject('tsconfig.json');

//var config = new Config();

var gulpTasks = {

	deleteWWW: function () {
		del("www");
	},

	compileToOneFile: function() {

		del("www").then(function() {

			gulp.src('src/server/api/apiRoutes.ts')
					.pipe(
							ts({
								noImplicitAny: false
								,out: './output.js'
								,target: "es5"
								//"sourceMap": true,
								//,module: 'commonjs' //'amd'
								//,isolatedModules: false
							})
					)
					.pipe(concat('output.js'))
					.pipe(gulp.dest('www'));

		});
	},

	compileProject: function() {

		del("www").then(function() {

			var tsFiles = [

				"src/server/api/**/*.{ts,tsx}"
				,"src/server/apiRoutes.ts"
				//"src/**/*.ts"
			];

			var tsProject = ts.createProject('tsconfig.json');

			var tsResult = gulp.src(tsFiles)
					//.pipe(sourcemaps.init())
					.pipe(ts(tsProject));

			tsResult.js
					.pipe(concat('output.js'))
					.pipe(gulp.dest("www"));

		});
	}
}

gulp.task('clean', gulpTasks.deleteWWW);
gulp.task('ts', gulpTasks.compileToOneFile);
gulp.task('tsp', gulpTasks.compileProject);



//gulp.task('compile-ts', function () {
//	var sourceTsFiles = [config.allTypeScript,                //path to typescript files
//		config.libraryTypeScriptDefinitions]; //reference to library .d.ts files
//
//
//	var tsResult = gulp.src(sourceTsFiles)
//		.pipe(sourcemaps.init())
//		.pipe(tsc(tsProject));
//
//	tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
//	return tsResult.js
//		.pipe(sourcemaps.write('.'))
//		.pipe(gulp.dest(config.tsOutputPath));
//});
//
///**
// * Remove all generated JavaScript files from TypeScript compilation.
// */
//gulp.task('clean-ts', function (cb) {
//	var typeScriptGenFiles = [
//		config.tsOutputPath +'/**/*.js',    // path to all JS files auto gen'd by editor
//		config.tsOutputPath +'/**/*.js.map', // path to all sourcemap files auto gen'd by editor
//		'!' + config.tsOutputPath + '/lib'
//	];
//
//	// delete the files
//	del(typeScriptGenFiles, cb);
//});