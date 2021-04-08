//chon dap an dung
const puppeteer = require('puppeteer');
const axios = require('axios');
(async () => {
    
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    page.setViewport({
        width:1280, height:720
    });
    await page.goto('http://eop.edu.vn/base/login', {waitUntil:'networkidle2'});
    // const accLogin = await page.$eval('#input-username', el => el.value ="2018601167");
    // console.log(accLogin);
    // const passLogin = await page.$eval('#input-password',el => el.value = "201860116710542");
    // console.log(passLogin);
    // await page.click('#login-btn');
    var acc = "2018606775";
    var pass="hungbjn1";
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
    await page.goto('http://eop.edu.vn/study/branch/4',{waitUntil :'networkidle2'});
    await page.goto('http://eop.edu.vn/study/group?id=dg1u1xBCjUtPciL8j05/YQhg%3D%3D',{waitUntil:'networkidle2'});
    await page.goto('http://eop.edu.vn/study/unit?id=dgOeNIS3GkpsyXz%2B2apdkwqw%3D%3D',{waitUntil:'networkidle2'});
    await page.goto('http://eop.edu.vn/study/course?id=dgnytc13kFGN4yjHWNnN39NmCflDu47HxmGxNEVupTeA8%3D',{waitUntil:'networkidle2'});
    // const sting = "http://eop.edu.vn/study/task/15956?id=dg/CnT8KaF60Wp5J2CeJ0dCg%3D%3D";
    // const sting = "http://eop.edu.vn/study/task/15949?id=dgsfFUg83NmtameHxhP5w1Xg%3D%3D";
    // const sting = "http://eop.edu.vn/study/task/16176?id=dg%2BOJMpLd1PWuQoJVK3cTVqQ%3D%3D";
    // const sting = "http://eop.edu.vn/study/task/16177?id=dgCi7%2BFKHuHXdqwYGQItGIyg%3D%3D";
    const sting = "http://eop.edu.vn/study/task/1900?id=dgyhKzASxAT0EVJAVKyfmNIg%3D%3D";
    await page.goto(sting,{waitUntil:'networkidle2'});

    const inputWrongAns = await page.evaluate(() => {
        let nodeList = document.querySelectorAll('#dquestion input');
        nodeList = [...nodeList];
        nodeList = nodeList.map(ele => ele.value = "q");
        return inputWrongAns = nodeList.length;
    });
    await wait(4000);
    await page.click('#dSubmit');
    await wait(2500);
    try{
        await page.click('#dViewAnswer');
        await wait(1000);
    }
    catch(e){
        console.log(e);
    }
    await page.click('#dViewAnswer');
    const insertRightAns = await page.evaluate(() => {
        let nodeList = document.querySelectorAll('#dquestion input');
        nodeList = [...nodeList];
        nodeList = nodeList.map(ele => ele.value = ele.placeholder);
        return insertRightAns = nodeList.length;
    });
    await page.click('#dSubmit');
   
//    var dataLogin = {
//     'Accept-Encoding': 'gzip, deflate',
//     'Accept-Language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
//     'Connection': 'keep-alive',
//     'Content-Length': '4827',
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//     'Cookie': '_ga=GA1.3.914573258.1566295638; dvisit=100a8edd8e331807b4ed58f3782706fa617ed; _gid=GA1.3.1532292648.1567656417; degroup_343="dgLPMpbFJ2m6Z02UBXKHB3yZJ/vydQ55K13Fy2HPtdkL4%3D"; _gat_gtag_UA_1978223_32=1; duser1=fb10dd2a2610d55585bcf3b576a6b120',
//     'Host': 'eop.edu.vn',
//     'Origin': 'http://eop.edu.vn',
//     'Referer': 'http://eop.edu.vn/base/login',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
//     'X-Requested-With': 'XMLHttpRequest'
//    }
//     var data2send = {
//         taskid: 'dgaOOsUjlqcSVrO/eOYWgu4Q%3D%3D',
//         languageid: 1,
//         taskstart: 'dgwRu4ehRRlwuDho/oYK2IML8s4pLElrI8iV3e4cU6eLM%3D',
//         timeclient: 1567774382,
//         btn_submit: 0,
//         btn_answer: 0,
//         vocabularys: 'db3e22f226c11b5695b8,171cb8f32b5bd0a653ae,f0c7765284a54adfdd7d,357bd74edad7a5ca3898,ef21bf22481e7930df1e,e77f3b1b7fea6d7485bc,3899699d5fbcc4f5ce09,d513bc216eb58a7e720d,06fa6f806a3b83d88390,a9b685a9e8c2047d4b9f'
//     }
    
//     axios.post('http://eop.edu.vn/base/authen/login',dataLogin)
//     .then(function(respond1){
//         console.log(respond1)
//     })
//     .catch(function(err1){
//         console.log(err1);
//     })
//     wait(1000);
//     axios.post('http://eop.edu.vn/study/task/result/138869/16175',data2send)
//     .then(function(respond){
//         console.log(respond)
//     })
//     .catch(function(err){
//         console.log(err);
//     })
    
})();

async function wait(ms) {
    await new Promise (resolve => {
        setTimeout(resolve,ms);
    })
}