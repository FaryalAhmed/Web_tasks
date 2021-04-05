var express = require("express");
var fs = require("fs");
var request = require("request");
var cheerio = require("cheerio");
var app = express();

app.get("/scrape", function(req, res) {
    // Let's scrape Anchorman 2
    url = "https://myshop.pk/apple-store-pakistan/iphone/iphone-11";
    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { title: "", release: "", rating: "" };

            $(".product.photo.product-item-photo").filter(function() {
                var data = $(this);
                var links = data.first().children();
                var m = links.attr("href");

                request(m, function(error, response, html) {
                    console.log(error);
                    if (!error) {
                        var newPage = cheerio.load(html);
                        console.log("hello");
                        newPage("tr").filter(function() {
                            var specs = newPage(this);
                            console.log(specs.children().last().text());
                        });
                    }
                });
            });

            $(".ratingValue").filter(function() {
                var data = $(this);
                rating = data.text().trim();
                json.rating = rating;
            });
        }

        fs.writeFile("output.json", JSON.stringify(json, null, 4), function(err) {
            console.log(
                "File successfully written! - Check your project directory for the output.json file"
            );
        });

        res.send("Check your console!");
    });
});

app.listen("8081");
console.log("Magic happens on port 8081");
exports = module.exports = app;