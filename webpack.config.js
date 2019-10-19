const path = require("path");

module.exports = {
	devtool: "inline-source-map",
	mode: "development",
	entry: path.resolve(__dirname, "./src/index.tsx"),
	output: {
		path: path.resolve(__dirname, "./public"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: "ts-loader",
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	devServer: {
		contentBase: path.resolve(__dirname, "public"),
		compress: true,
		port: 8080,
	},
	watch: true,
};
