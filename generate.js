const fs = require("fs");
const yaml = require("js-yaml");
const Handlebars = require("handlebars");

// Leer YAML
const fileContents = fs.readFileSync("cv.yaml", "utf8");
const data = yaml.load(fileContents);

// Leer template
const templateHtml = fs.readFileSync("template.html", "utf8");

// Compilar template
const template = Handlebars.compile(templateHtml);

// Generar HTML final
const result = template(data);

// Guardar resultado
fs.writeFileSync("output.html", result);

console.log("CV generado: output.html");