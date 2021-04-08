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
    var acc = "2018601167";
    var pass="201860116710542";
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
    await page.goto('http://eop.edu.vn/study/group?id=dg6t81k4ho0FDOIBLEVdcl4g%3D%3D',{waitUntil:'networkidle2'});
    await page.goto('http://eop.edu.vn/study/course?id=dgx5tYSXi2rX4HvSwTseTWNO8wUvQDyUg4fX9YTqD8yE8%3D',{waitUntil:'networkidle2'});
    // const sting = "http://eop.edu.vn/study/task/15956?id=dg/CnT8KaF60Wp5J2CeJ0dCg%3D%3D";
    // const sting = "http://eop.edu.vn/study/task/15949?id=dgsfFUg83NmtameHxhP5w1Xg%3D%3D";
    // const sting = "http://eop.edu.vn/study/task/16176?id=dg%2BOJMpLd1PWuQoJVK3cTVqQ%3D%3D";
    const sting = "http://eop.edu.vn/study/task/16376?id=dgru7oibvX8hxEkr217uO1Gw%3D%3D";
    await wait(2000);
    await page.goto(sting,{waitUntil:'networkidle2'});
    const flag = await page.evaluate(() => {
        let nodeList = document.querySelectorAll('#dquestion .ques');
        return flag = [...nodeList].length;
    });
    // const nodeList = await page.evaluate(() => {
    //     nodeList = document.querySelectorAll('#dquestion .ques');
    //     // loz = [...loz];
    //     // let nodeList = loz.map(ele => ele);
    //     return nodeList = [...nodeList];
    // })
    // const nodeList = await page.$$('#dquestion .ques');
    // nodeList = [...nodeList];
    // // // console.log(tmp);
    // // const nodeList = await page.evaluate(eval => {
    // //     return nodeList = [...eval];
    // // },tmp)
    // // console.log(nodeList);
    // // console.log(flag);
    // console.log(nodeList);
    var checkArray = [0,0,0,0,0];
    var times = 0;
    while(true){
        var check = 0;
        for(var i = 0; i < flag; i++){
            // if(checkArray[i] == 511)    break;
            // let _flag = nodeList[i].lastElementChild.childElementCount;
            var _flag = await page.evaluate((i) => {
                let nodeList = document.querySelectorAll('#dquestion .ques');
                return nodeList[i].lastElementChild.childElementCount;
            },i);
            // console.log(_flag);
            for(var j = 0; j < _flag; j++){
                var style = await page.evaluate((i,j) => {
                    return style = document.querySelectorAll('#dquestion .ques')[i].lastElementChild.children[j].lastElementChild.getAttribute('style');
                },i,j);
                console.log(style);
                if(style == "color: black;"){
                    continue;
                }
                // var checkClick = false;
                const answer = await page.evaluate((style) => {
                    if(style != "color: green;"){
                        return answer = true;
                    }
                    else{
                        return answer = false;
                    }
                },style);
                if(answer == false){
                    check++;
                    // console.log(check);
                    break;
                }
                else{
                    if(style == "color: red;"){
                        j++;
                    }
                    const click = await page.evaluate((i,j) => {
                        document.querySelectorAll('#dquestion .ques')[i].lastElementChild.children[j].firstElementChild.lastChild.click();
                        return click = document.querySelectorAll('#dquestion .ques')[i].lastElementChild.children[j].firstElementChild.lastChild;
                    },i,j)
                    // console.log(click);
                    // console.log(check);
                    break;
                }
                //     // let style = document.querySelectorAll('#dquestion .ques')[i]
                //     // if(/* document.querySelectorAll('#dquestion .ques')[i].lastElementChild.children[j].lastElementChild.getAttribute('style')  */style != null){
                //         if(/* document.querySelectorAll('#dquestion .ques')[i].lastElementChild.children[j].lastElementChild.getAttribute('style') */ style == "color: green;"){
                //             // checkArray[i] = 511;
                //             check++;
                //             return answer = true;
                //         }
                //         else{
                //             checkClick = true;
                //             return answer = true;
                //         }
                //     // }
                //     // else{
                //     //     return answer = true;
                //     //     check
                //     // }
                // },style,check,checkClick);
                // if(answer == true){
                    // if(checkClick == true){
                    //     const click = await page.evaluate((i,j) => {
                            // document.querySelectorAll('#dquestion .ques')[i].lastElementChild.children[j].firstElementChild.lastChild.click();
                            // return click = document.querySelectorAll('#dquestion .ques')[i].lastElementChild.children[j].firstElementChild.lastChild;
                    //     },i,j);
                    //     console.log(click);
                //         checkClick = false;
                //     }
                //     break;
                // }
            }
        }
        console.log(check);
        if(check == flag)   break;
        const loz = await page.evaluate(() =>{
            return loz = document.querySelector('#dSubmit').click();
        })
        await wait(3000);
    }
})();

async function wait(ms) {
    await new Promise (resolve => {
        setTimeout(resolve,ms);
    })
}
