//chon dap an dung
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
    // console.log("done");
    // await wait (10000);
    // try{
    //     await page.click('body > div.back-link > a');
    // }
    // catch(e){
    //     console.log(e);
    // }
    // const accLogin = await page.$eval('#input-username', el => el.value ="2018601167");
    // console.log(accLogin);
    // const passLogin = await page.$eval('#input-password',el => el.value = "201860116710542");
    // console.log(passLogin);
    // // await page.$eval('#input-username', el => el.value ="2018601167");
    // // await page.$eval('#input-password',el => el.value = "201860116710542");
    // await page.click('#login-btn');
    // try{
    //     await page.click('#login-btn');
    // }
    // catch(e){
    //     console.log(e);
    // }
    await page.evaluate(() => {
        return document.querySelector('#input-username').value = "2019501407";
    })
    await page.evaluate(() => {
        return document.querySelector('#input-password').value = "Lam_123";
    })
    await page.evaluate(() => {
        return document.querySelector('#login-btn').click();
    })
    await new Promise (resolve => {
        setTimeout(resolve,2000);
    })
    await page.goto('http://eop.edu.vn/study/group?id=dg6t81k4ho0FDOIBLEVdcl4g%3D%3D',{waitUntil:'networkidle2'});
    await page.goto('http://eop.edu.vn/study/course?id=dgx5tYSXi2rX4HvSwTseTWNO8wUvQDyUg4fX9YTqD8yE8%3D',{waitUntil:'networkidle2'});
    // const sting = "http://eop.edu.vn/study/task/15956?id=dg/CnT8KaF60Wp5J2CeJ0dCg%3D%3D";
    // const sting = "http://eop.edu.vn/study/task/15949?id=dgsfFUg83NmtameHxhP5w1Xg%3D%3D";
    // const sting = "http://eop.edu.vn/study/task/16176?id=dg%2BOJMpLd1PWuQoJVK3cTVqQ%3D%3D";
    const sting = "http://eop.edu.vn/study/task/16175?id=dgaOOsUjlqcSVrO/eOYWgu4Q%3D%3D";
    await page.goto(sting,{waitUntil:'networkidle2'});
    // const deleteThat = await page.evaluate(() => {
    //     let inner = document.querySelector('#qid0 > ul.dstore.sortable').innerHTML = '<br style="clear: both">';
    //     return deleteThat = inner;
    // });
    // console.log(deleteThat);
    // var show = await page.evaluate(() => {
    //     let inner = document.querySelector('#qid0 > ul.dview.sortable').innerHTML = ("<li><div>F</div></li><li><div>O</div></li><li><div>R</div></li><li><div>M</div></li><li><div>A</div></li><li><div>L</div></li><br>" /* + "<li><div>O</div></li><li><div>L</div></li>" + "<li><div>R</div></li>" + "<li><div>M</div></li>" + "<li><div>A</div></li>" + "<li><div>L</div></li>" + "<br>" */);
    //     return show = inner;
    // });
    // console.log(show);
    // // show = ("<li><div>F</div></li>" + "<li><div>O</div></li>" + "<li><div>R</div></li>" + "<li><div>M</div></li>" + "<li><div>A</div></li>" + "<li><div>L</div></li>" + "<br>");
    const flag = await page.evaluate(() => {
        let nodeList = document.querySelectorAll('.dvoca');
        return flag = [...nodeList].length;
    });
    
    for(var i = 1; i <= flag; i++){
        const recode = await page.evaluate((i) => {
            return document.querySelector('.dvoca.q' + i + ' >input').value = "db3e22f226c11b5695b8";
        },i)
        console.log(recode);
        for(var j = 0; j < 6; j++){
            const Arr = ['F','O','R','M','A','L'];
            const rework = await page.evaluate((i,j,Arr) => {
                return document.querySelector('.dvoca.q' + i + ' .dstore.sortable > li:nth-child(' + (j + 1) +') > div').innerText = Arr[j];
            },i,j,Arr);
            console.log(rework);
        }
        for(var j = 1; j <= 6; j++){
            await page.click('.dvoca.q' + i + ' .dstore.sortable > li:nth-child(' + 1 +') > div');
        }
        await wait (2000);
    }
})();

async function wait(ms) {
    await new Promise (resolve => {
        setTimeout(resolve,ms);
    })
}