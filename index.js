const app = require("express")();
const helper = require("./helper");
const port = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.json({
    success: true,
    message: "Service Is Running",
  })
);
app.get("/api/otakudesu/home", helper.home);
app.get("/api/otakudesu/anime/:id", helper.anime);
app.get("/api/otakudesu/eps/:id", helper.episode);
app.get("/api/otakudesu/lengkap/:id", helper.lengkap);
app.get("/api/otakudesu/search/:query", helper.search);
app.get("/api/otakudesu/genres/:id/:page", helper.genre);
app.get("/api/otakudesu/complete/:page", helper.complete);
app.get("/api/otakudesu/schedule", helper.schedule);
app.get("/api/otakudesu/thumb/:id", helper.thumb);

app.use("*", (req, res) => {
  var data = {
        "Otakudesu": {
            "Home": {
                "url": "/otakudesu/home",
                "desc": "Homepage",
            },
            "Complete": {
                "url": "/otakudesu/complete",
                "desc": "Complete/Finished Anime",
            },
            "Complete2": {
                "url": "/otakudesu/complete/page/${page}",
                "params": "pageNumber",
                "desc": "Complete Pagination",
            },
            "Ongoing": {
                "url": "/otakudesu/ongoing",
                "desc": "Ongoing Anime",
            },
            "Schedule": {
                "url": "/otakudesu/schedule",
                "desc": "Schedule Anime",
            },
            "Genres": {
                "url": "/otakudesu/genres",
                "desc": "Genre List",
            },
            "Genres Id": {
                "url": "/otakudesu/${id}/page/${page}",
                "params": "id,pageNumber",
                "desc": "Show Anime by Genre",
            },
            "Search": {
                "url": "/otakudesu/search/${query}",
                "params": "query",
                "desc": "Search Anime",
            },
            "Detail Anime": {
                "url": "/otakudesu/anime/${id}",
                "params": "id",
                "desc": "Detail Anime",
            },
            "Detail Anime batch": {
                "url": "/otakudesu/batch/${id}",
                "params": "id",
                "desc": "Detail Anime Batch",
            },
            "Detail Episode": {
                "url": "/otakudesu/eps/${id}",
                "params": "id",
                "desc": "Detail Anime's Episode",
            },
        }
    };
  res.status(404).json({
    success: false,
    message: data,
  })
});

app.listen(port, () => console.log("Listening to port", port));

module.exports = app;
