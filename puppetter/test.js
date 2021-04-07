const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://api.example.com/login');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('#userName',{timeout:1500});
    await page.waitForSelector('#selectCountry',{timeout:1500});
    await page.waitForSelector('#selectCity',{timeout:1500});
    await page.waitForSelector('#selectGenderMale',{timeout:1500});
    await page.waitForSelector('#selectGenderFemale',{timeout:1500});
    console.log('TESTCASE:test_case2:success');
    }
     catch(e){
      console.log('TESTCASE:test_case2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();


  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://api.example.com/login');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('#submitButton',{timeout:1500});
    console.log('TESTCASE:test_case3:success');
    }
     catch(e){
      console.log('TESTCASE:test_case3:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();


