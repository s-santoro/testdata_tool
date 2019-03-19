const fs = require("fs");
// log all files in ./files/
let files = [];
let fileCounter = 0;
if(files.length === 0)
{
    fs.readdir(`${__dirname}/files/`, {}, (err, filesTemp) => {
        if (err) throw err;
        files = filesTemp;
        fs.readFile(`${__dirname}/files/${files[fileCounter]}`, "utf-8", (err, data) => {
            if (err) throw err;
            console.log(`${files[fileCounter]}`);
            let json = JSON.parse(data);
            let html = json.content;
            let doc = document.getElementById('frame').contentWindow.document;
            doc.open();
            doc.write(html);
            doc.close();
            document.getElementById('title').innerText = json.url;
        });
        fs.mkdir(`${__dirname}/files/pos`, (err) => {
            if (err) throw err;
        });
        fs.mkdir(`${__dirname}/files/neg`, (err) => {
            if (err) throw err;
        });
        fs.mkdir(`${__dirname}/files/link`, (err) => {
            if (err) throw err;
        });
    });
}

const yes = document.getElementById('yes');
const no = document.getElementById('no');
const link = document.getElementById('link');


yes.addEventListener('click', event => {
    // copy file to pos-folder
    fs.copyFile(
        `${__dirname}/files/${files[fileCounter]}`,
        `${__dirname}/files/pos/${files[fileCounter]}`,
        (err) => {
            if(err) throw err;
            console.log("copied to pos");
    });
    if(fileCounter < files.length) {
        fileCounter++;
    }else{
        alert("all files checked");
    }
    // load next file
    fs.readFile(`${__dirname}/files/${files[fileCounter]}`, "utf-8", (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let html = json.content;
        let doc = document.getElementById('frame').contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();
        document.getElementById('title').innerText = json.url;
    });
});
no.addEventListener('click', event => {
    // copy file to neg-folder
    fs.copyFile(
        `${__dirname}/files/${files[fileCounter]}`,
        `${__dirname}/files/neg/${files[fileCounter]}`,
        (err) => {
            if(err) throw err;
            console.log("copied to neg");
    });
    if(fileCounter < files.length) {
        fileCounter++;
    }else{
        alert("all files checked");
    }
    // load next file
    fs.readFile(`${__dirname}/files/${files[fileCounter]}`, "utf-8", (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let html = json.content;
        let doc = document.getElementById('frame').contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();
        document.getElementById('title').innerText = json.url;
    });
});
link.addEventListener('click', event => {
    // copy file to neg-folder
    fs.copyFile(
        `${__dirname}/files/${files[fileCounter]}`,
        `${__dirname}/files/link/${files[fileCounter]}`,
        (err) => {
            if(err) throw err;
            console.log("copied to link");
    });
    if(fileCounter < files.length) {
        fileCounter++;
    }else{
        alert("all files checked");
    }
    // load next file
    fs.readFile(`${__dirname}/files/${files[fileCounter]}`, "utf-8", (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let html = json.content;
        let doc = document.getElementById('frame').contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();
        document.getElementById('title').innerText = json.url;
    });
});
