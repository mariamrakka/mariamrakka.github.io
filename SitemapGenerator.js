const fs = require("fs");
const { create } = require("xmlbuilder2");

const baseUrl = "https://mariamrakka.github.io";

const routes = [
    { path: "/", changefreq: "daily", priority: "1.0" },
    { path: "/about", changefreq: "daily", priority: "0.9" },
    { path: "/publications", changefreq: "daily", priority: "0.9" },
    { path: "/vitae", changefreq: "daily", priority: "0.9" },
];

const urlset = create({ version: "1.0" }).ele("urlset", {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
});

routes.forEach(({ path, changefreq, priority }) => {
    const url = urlset.ele("url");
    url.ele("loc").txt(baseUrl + path);
    url.ele("lastmod").txt(new Date().toISOString());
    url.ele("changefreq").txt(changefreq);
    url.ele("priority").txt(priority);
});

const xml = urlset.end({ prettyPrint: true });
fs.writeFileSync("./public/sitemap.xml", xml);

console.log("Sitemap generated successfully!");
