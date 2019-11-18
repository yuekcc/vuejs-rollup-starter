import vueTemplateCompiler from "rollup-plugin-vue-template-compiler";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "umd"
  },
  plugins: [
    resolve(),
    commonjs(),
    vueTemplateCompiler({
      include: "src/**/*.template.html"
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
};
