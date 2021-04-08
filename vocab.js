//phan vocab
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    page.setViewport({
        width:1280, height:720
    });
    await page.goto('http://eop.edu.vn/base/login', {waitUntil:'networkidle2'});
    //đăng nhập
    // var acc = "2018601167";
    // var pass="201860116710542";
    // var acc = "2019501407";
    // var pass="Tunglam@123";
    // var acc= "2018606775";
    // var pass="hungbjn1";
    var acc = "2018600543"; 
    var pass ="vudinhquang";
    // var acc = "2018606624";
    // var pass = "Lengochai123"
    // var acc="2019501609";
    // var pass="201950160910934";
    await page.evaluate((acc) => {
        return document.querySelector('#input-username').value = acc;
    },acc);
    await page.evaluate((pass) => {
        return document.querySelector('#input-password').value = pass;
    },pass);
    await page.evaluate(() => {
        return document.querySelector('#login-btn').click();
    });
    await new Promise (resolve => {
        setTimeout(resolve,2000);
    });
    // await page.goto('http://eop.edu.vn/study/group?id=dg6t81k4ho0FDOIBLEVdcl4g%3D%3D',{waitUntil:'networkidle2'});
    // await page.goto('http://eop.edu.vn/study/course?id=dgx5tYSXi2rX4HvSwTseTWNO8wUvQDyUg4fX9YTqD8yE8%3D',{waitUntil:'networkidle2'});
    await page.goto('http://eop.edu.vn/study/group?id=dg6t81k4ho0FDOIBLEVdcl4g%3D%3D',{waitUntil:'networkidle2'});
    await page.goto('http://eop.edu.vn/study/course?id=dgx5tYSXi2rX4HvSwTseTWNO8wUvQDyUg4fX9YTqD8yE8%3D',{waitUntil:'networkidle2'});
    await page.goto('http://eop.edu.vn/study/unit?id=dg5lpIwmG0ZqByXyD2IIHcAA%3D%3D',{waitUntil:'networkidle2'});
    // const sting = 'http://eop.edu.vn/study/task/15955?id=dg60xVcJxiutp7Wqk9%2BlclVw%3D%3D';
    const sting = "http://eop.edu.vn/study/task/15946?id=dgyoRr1ETNqe7spt9JG77gTA%3D%3D";
    await page.goto(sting,{waitUntil:'networkidle2'});

    // const howManyVocabIsIt = await page.evaluate(() => {
    //     let nodeList = document.querySelectorAll('.fa.fa-play-circle.daudio');
    //     // if([...nodeList].length == 0){
    //     //     nodeList = document.querySelectorAll('fa fa-play-circle daudio')
    //     // }xz
    //     return howManyVocabIsIt = [...nodeList].length;
    // });
    // // for(var i = 1; i < howManyVocabIsIt; i++){
    // //     // await page.click('#mbody > div > div:nth-child(1) > div:nth-child('+ i +') > div > div > h4 > i');
        
    // // }
    // let cst = 4;
    // let rows = howManyVocabIsIt / cst;
    // console.log(rows);
    // let remains = howManyVocabIsIt % cst;
    // if(remains == 0)    rows++;
    // console.log(remains);
    // for(var i = 1; i < rows; i++){
    //     for(var j = 1; j <= 4; j++){
    //         await page.click('#mbody > div > div:nth-child(' + i + ') > div:nth-child('+ j +') > div > div > h4 > i');
    //     }
    // }
    // for(var r = 1; r <= remains; r++){
    //     await page.click('#mbody > div > div:nth-child(' + i + ') > div:nth-child('+ r +') > div > div > h4 > i');
    // }
    // var clickList = await page.evaluate(() => {
    //     let nodeList = document.querySelectorAll('.fa.fa-play-circle.daudio');
    //     if([...nodeList].length == 0){
    //         nodeList = document.querySelectorAll('fa fa-play-circle daudio');
    //     }
    //     return clickList = nodeList;
    // });
    // console.log(clickList);
    // for(const clickNode of clickList){
    //     await clickNode.click();
    // }
    const hihi = await page.$$eval('.fa.fa-play-circle.daudio', eles => {
        for(var ele of eles){
            ele.click();
        }
        return [...eles].length;
    });
    console.log(hihi);
})();