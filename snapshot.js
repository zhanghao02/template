const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  for(let i=0; i<=100; i++){  
    try{
      const n = i.toString();
      const name = n.padStart(3, "0"); 
      const page = await browser.newPage();
      await page.setViewport({ width: 1366, height: 768});
      await page.goto('http://127.0.0.1:8080/webpage1/' + name);
      await page.screenshot({path: name + '.png'});
      await page.close();
      console.log(i);
    } catch {
      console.log("error " + i);
    }
  }

  await browser.close();
})();
