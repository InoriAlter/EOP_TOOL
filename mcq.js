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
    // await page.goto('http://eop.edu.vn/study/group?id=dg6t81k4ho0FDOIBLEVdcl4g%3D%3D',{waitUntil:'networkidle2'});
    // await page.goto('http://eop.edu.vn/study/course?id=dgx5tYSXi2rX4HvSwTseTWNO8wUvQDyUg4fX9YTqD8yE8%3D',{waitUntil:'networkidle2'});
    // const sting = "http://eop.edu.vn/study/task/15956?id=dg/CnT8KaF60Wp5J2CeJ0dCg%3D%3D";
    // const sting = "http://eop.edu.vn/study/task/15949?id=dgsfFUg83NmtameHxhP5w1Xg%3D%3D";
    // const sting = "http://eop.edu.vn/study/task/16102?id=dgVWC00cGW1x60u70Qs0X/xQ%3D%3D";
    const sting = "http://eop.edu.vn/study/task/1882?id=dg/YVVkqQ5hXuNxpKgZdVHAg%3D%3D";
    await page.goto(sting,{waitUntil:'networkidle2'});

    // var flag = 'a';
    // var i = 1;
    // while(flag != undefined){
    //     var flag = await page.evaluate(() => {
    //         return flag = $('.dvoca.q' + i);
    //     });
    //     var j = 4;
    //     var _flag = 'a';
    //     while(_flag != undefined){
    //         await page.click('.dvoca.q' + i + '> div:nth-child(' + j +') > a > span');
    //         j++;
    //         var _flag = await page.evaluate(() => {
    //             return _flag =$('.dvoca.q' + i + '> div:nth-child(' + j +') > a > span');
    //         })
    //     }
    //     i++;
    //     await new Promise (resolve => {
    //         setTimeout(resolve,2000);
    //     })
    // }
    const flag = await page.evaluate(() => {
        let nodeList = document.querySelectorAll('.dvoca');
        return flag = [...nodeList].length;
    });
    console.log(flag);
    for(var i = 1; i <= flag; i++){
        console.log("lan " + i + ": ");
        // await new Promise (resolve => {
        //     setTimeout(resolve,2000);
        // })
        const _flag = await page.evaluate((i) => {
            let nodeList = document.querySelectorAll('.dvoca.q' + i +' .dans');
            return _flag = [...nodeList].length;
        },i);
        var logic = await page.evaluate((i) => {
            let ohNo =  document.querySelector('.dvoca.q' + i + ' > div:nth-child(' + 3 +') > a > span')
            if(ohNo == null) return logic = 4;
            return logic = 3;
        },i);
        // console.log(logic);
        for(var j = logic; j <= _flag + logic; j++){
            
            // try{
                
            // }
            // catch(e){
            //     console.log(e);
            //     // break;
            // }
            // await page.click('.dvoca.q' + i + /* '.active' +  */' > div:nth-child(' + j +') > a > span'); 
            await page.evaluate((i,j) =>{
                document.querySelector('.dvoca.q' + i + /* '.active' +  */' > div:nth-child(' + j +') > a > span').click();
                return;
            },i,j);
                await wait(500)   ;
                const truE = await page.evaluate((i,j) => {
                    // let check = document.querySelector('.dvoca.q'+ i + 1 +'.active > p');
                    let check = document.querySelector('.dvoca.q' + i + /* '.active' + */ ' > div:nth-child(' + j +')').getAttribute('style');
                    if(check != null){
                        return truE = 1;
                    }
                    return truE = 0;
                    // if(check == ''){
                    //     return truE = 0;
                    // }
                    // return truE = 1;
                },i,j);
                if(truE == 0){z
                    await wait(5000);
                    break;
                }
        }
        // await wait(2000);
    }
})();

async function wait(ms) {
    await new Promise (resolve => {
        setTimeout(resolve,ms);
    })
}