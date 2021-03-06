var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer")
var Pdfwriter = require("./Pdfwriter");

var leitor = new Reader();
var escritor = new Writer();

async function main(){
    var dados = await leitor.Read("./Pasta1.csv");
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);
    
    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html);
    Pdfwriter.WritePDF(Date.now() + ".PDF", html);
}

main();