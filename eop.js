const puppeteer = require('puppeteer');
// document.querySelectorAll('#mfooter > button')[0].click()
// document.querySelector('#mfooter > button').nextElementSibling

(async () => {
    // vào eop
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    page.setViewport({
        width:1280, height:720
    });
    await page.goto('http://eop.edu.vn/base/login', {waitUntil:'networkidle2'});
    //đăng nhập
    var acc = "2018601167";
    var pass="201860116710542";
    // var acc = "2019501407";
    // var pass="Tunglam@123";
    // var acc= "2018606775";
    // var pass="hungbjn1";
    // var acc = "2018600543";
    // var pass ="vudinhquang";
    // var acc = "2018606624";
    // var pass = "Lengochai123"11111
    // var acc="2019501609";
    // var pass="201950160910934";
    // var acc ="2019501225";
    // var pass="201950122510934";
    // var acc = "2018605122";
    // var pass = "qsxfyjm13579";
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
    await new Promise (resolve => {
        setTimeout(resolve,2000);
    })
    //chọn làm lẻ bài hoặc làm hết
    var singleOne = false;
    if(singleOne == false){
        //vào học phần hiện có
        const english = await page.$eval('#courses > div:nth-child(1) > div > div > div > a', el => el.href);
        // const english = await page.$eval('#courses > div:nth-child(2) > div:nth-child(1) > div > div > a', el => el.href);
        await page.goto(english,{waitUntil:'networkidle2'});
        const intoRightSemester = await page.evaluate(() =>{
            let nodeList = document.querySelectorAll('.ditem.panel-body');
            nodeList = [...nodeList];
            // for(let i = 0; i < nodeList.length; i++){
            //     if(nodeList[i].lastElementChild.href != undefined){
            //         return intoRightSemester = nodeList[i].lastElementChild.href;
            //     }
            // }
            for(let i = nodeList.length - 1; i >= 0; i--){
                if(nodeList[i].lastElementChild.href != undefined){
                    return intoRightSemester = nodeList[i].lastElementChild.href;
                }
            }
        });
        console.log(intoRightSemester);
        await page.goto(intoRightSemester,{waitUntil:'networkidle2'});
        //nhả vào unit đầu tiên
        const waitForIt = await page.$eval('#groups > div > div > div > div > a',el => el.href);
        console.log(waitForIt);
        await page.goto(waitForIt,{waitUntil:'networkidle2'});
        const goToRightUnit = await page.evaluate(() => {
            let nodeList = document.querySelectorAll('.ditem.panel-body.allow.dunit');
            nodeList =[...nodeList];
            return goToRightUnit = nodeList[nodeList.length - 1].firstElementChild.href;
        });
        console.log(goToRightUnit);
        await page.goto(goToRightUnit,{waitUntil:'networkidle2'});
        //vào bài đầu tiên
        const firstExer = await page.$eval('#tpvocabulary > a:nth-child(1)', el => el.href);
        await page.goto(firstExer);
    }
    else{
        //debug
        // await page.goto("http://eop.edu.vn/study/unit?id=dgP7gNhEX007kqvbE3OMI93g%3D%3D",{waitUntil:'networkidle2'});
        const targetLinks = "http://eop.edu.vn/study/unit?id=dgP7gNhEX007kqvbE3OMI93g%3D%3D"
        await page.goto(targetLinks,{waitUntil:'networkidle2'});
    }
    //bắt đầu tool
    while(true){
        await wait(2000);
        //tìm loại bài
        var whatKindOfThisExer = await page.evaluate(() => {
            if(document.querySelector('#mbody').firstElementChild.className == null){
                return whatKindOfThisExer = 0;
            }
            return whatKindOfThisExer = document.querySelector('#mbody').firstElementChild.className;
        });
        // console.log(whatKindOfThisExer);
        if(whatKindOfThisExer == 0){
            break;
        }
        for(var i = 0; i < whatKindOfThisExer.length; i++){
            if(whatKindOfThisExer[i] == " "){
                whatKindOfThisExer = whatKindOfThisExer.substring(0,i);
                break;
            }
        }
        console.log(whatKindOfThisExer);
        //xử lý
        if(whatKindOfThisExer == "dvocabulary" ){
            await vocab(page);
            await wait(1000);
            await page.waitFor(() => !document.querySelector(".loading"));
            continue;
        }
        if(whatKindOfThisExer == "dmcq"){
            const letMeSee = await page.evaluate(() => {
                return letMeSee = document.querySelector('#mbody').firstElementChild.className;
            });
            if(letMeSee == "dmcq audio-write-word"){
                break;
            }
            else{
                await mcq(page);
            }
            await page.waitFor(() => !document.querySelector(".loading"));
            continue;
        }
        if(whatKindOfThisExer == "dquestion"){
            const letMeSee = await page.evaluate(() => {
                return letMeSee = document.querySelector('#mbody').firstElementChild.className;
            });
            if(letMeSee == "dquestion choose-reading-choose-answer" || letMeSee == "dquestion choose-listening-choose-answer"){
                await random(page);
            }else{
                await normie(page);
            }
            await page.waitFor(() => !document.querySelector(".animated.fadeInDown.toast-success"));
            //đây là chờ file success music xong =))
            await wait(6000);
            continue;
        }
        // if(whatKindOfThisExer == "dcontent"){

        // } 
        await page.evaluate(() => {
            return document.querySelector('#mfooter > button').click();
        });
        await wait(500);
        const isThatDone = await page.evaluate(() => {
            return isThatDone = document.querySelector('#daudioplayer').src;
        })
        if(isThatDone == "http:////i.eop.edu.vn/rs/congratulations0.mp3"){
            await wait(2000);
            break;
        }else{
            await wait(5000);
        }
        if(singleOne == true){
            break;
        }
    }
    await browser.close();
})();

async function wait(ms) {
    await new Promise (resolve => {
        setTimeout(resolve,ms);
    })
}
//bài vocabulary
async function vocab(page){
    const howManyVocabIsIt = await page.evaluate(() => {
        let nodeList = document.querySelectorAll('.fa.fa-play-circle.daudio');
        // if([...nodeList].length == 0){
        //     nodeList = document.querySelectorAll('fa fa-play-circle daudio')
        // }
        return howManyVocabIsIt = [...nodeList].length;
    });
    let cst = 4;
    let rows = howManyVocabIsIt / cst;
    console.log(rows);
    let remains = howManyVocabIsIt % cst;
    if(remains == 0)    rows++;
    console.log(remains);
    for(var i = 1; i < rows; i++){
        for(var j = 1; j <= 4; j++){
            await page.click('#mbody > div > div:nth-child(' + i + ') > div:nth-child('+ j +') > div > div > h4 > i');
        }
    }
    for(var r = 1; r <= remains; r++){
        await page.click('#mbody > div > div:nth-child(' + i + ') > div:nth-child('+ r +') > div > div > h4 > i');
    }
    await wait(2000);
    await page.evaluate(() => {
        return document.querySelector('#mfooter > button').click();
    })
}
//bài nghe chọn câu trả lời đúng
async function mcq(page){
    const flag = await page.evaluate(() => {
        let nodeList = document.querySelectorAll('.dvoca');
        return flag = [...nodeList].length;
    });
    console.log(flag);
    for(var i = 1; i <= flag; i++){
        console.log("lan " + i + ": ");
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
            const ifEverythingDone = await page.evaluate((i,j) =>{
                let tmp = document.querySelector('.dvoca.q' + i + /* '.active' +  */' > div:nth-child(' + j +') > a > span');
                if(tmp == null){
                    return ifEverythingDone = 1;
                }else{
                    document.querySelector('.dvoca.q' + i + /* '.active' +  */' > div:nth-child(' + j +') > a > span').click();
                    return ifEverythingDone = 0;
                }
            },i,j);
            if(ifEverythingDone == 1){
                break;
            }
            await wait(500)   ;
            const truE = await page.evaluate((i,j) => {
                // let check = document.querySelector('.dvoca.q'+ i + 1 +'.active > p');
                // const check = "0";
                try{
                    let check = document.querySelector('.dvoca.q' + i + /* '.active' + */ ' > div:nth-child(' + j +')').getAttribute('style');
                    if(check != null){
                        return truE = 1;
                    }
                    return truE = 0;
                }
                catch(e){
                    console.log(e);
                    return truE == 0;
                }
            },i,j);
            if(truE == 0){
                await wait(5000);
                break;
            }
        }
        // await wait(2000);
    }
}
//bài bình thường
async function normie(page){
    const inputWrongAns = await page.evaluate(() => {
        let nodeList = document.querySelectorAll('#dquestion input');
        nodeList = [...nodeList];
        nodeList = nodeList.map(ele => ele.value = "q");
        return inputWrongAns = nodeList.length;
    });
    await wait(4000);
    await page.evaluate(() => {
        return document.querySelector('#mfooter > button').click();
    });
    await wait(2500);
    await wait(31000);
    await page.evaluate(() => {
        return document.querySelector('#mfooter > button').nextElementSibling.click();
    })
    await wait(1500);
    //ấn làm lại
    await page.evaluate(() => {
        return document.querySelector('#mfooter > button').nextElementSibling.click();
    })
    const insertRightAns = await page.evaluate(() => {
        let nodeList = document.querySelectorAll('#dquestion input');
        nodeList = [...nodeList];
        nodeList = nodeList.map(ele => ele.value = ele.placeholder);
        return insertRightAns = nodeList.length;
    });
    wait(600000);
    await page.evaluate(() => {
        return document.querySelector('#mfooter > button').click();
    })
}
//bài ấn từng câu trả lời đúng
async function random(page){
    const flag = await page.evaluate(() => {
        let nodeList = document.querySelectorAll('#dquestion .ques');
        return flag = [...nodeList].length;
    });
    var checkArray = [0,0,0,0,0];
    var times = 0;
    while(true){
        var check = 0;
        for(var i = 0; i < flag; i++){
            var _flag = await page.evaluate((i) => {
                let nodeList = document.querySelectorAll('#dquestion .ques');
                return nodeList[i].lastElementChild.childElementCount;
            },i);
            for(var j = 0; j < _flag; j++){
                var style = await page.evaluate((i,j) => {
                    return style = document.querySelectorAll('#dquestion .ques')[i].lastElementChild.children[j].lastElementChild.getAttribute('style');
                },i,j);
                console.log(style);
                if(style == "color: black;"){
                    continue;
                }
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
                    break;
                }
            }
        }
        console.log(check);
        if(check == flag)   break;
        
        const loz = await page.evaluate(() =>{
            return loz = document.querySelector('#mfooter > button').click();
        })
        await wait(3000);
    }
}