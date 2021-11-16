/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async setCookies(page) {
    return new Promise(async (resolve, reject) => {
      const cookiesString = `_ga=GA1.2.952896634.1637039558; _gid=GA1.2.1694497513.1637039558; MONITOR_WEB_ID=e3dc8cb2-a089-4279-8ded-053ab1cea4a5; s_v_web_id=verify_kw1n396i_mq3hqg8m_BeeT_4jjK_Bnzz_kyAPRptiYc5g; passport_csrf_token_default=ba91c1abbab054c70e14bc9afd096954; passport_csrf_token=ba91c1abbab054c70e14bc9afd096954; sid_guard=77a6a9c6ce2918c61722cbea68df6134%7C1637039573%7C5184000%7CSat%2C+15-Jan-2022+05%3A12%3A53+GMT; uid_tt=71daef717f26c25008059fe2aac4866e; uid_tt_ss=71daef717f26c25008059fe2aac4866e; sid_tt=77a6a9c6ce2918c61722cbea68df6134; sessionid=77a6a9c6ce2918c61722cbea68df6134; sessionid_ss=77a6a9c6ce2918c61722cbea68df6134; sid_ucp_v1=1.0.0-KGUxMTNkNjRkYmRlOTBlNWI2YmRhYzczOWM2OGEzYjQ0MTMxNzYxNjUKFgj32OC__fX5BBDV-8yMBhiwFDgIQDgaAmxmIiA3N2E2YTljNmNlMjkxOGM2MTcyMmNiZWE2OGRmNjEzNA; ssid_ucp_v1=1.0.0-KGUxMTNkNjRkYmRlOTBlNWI2YmRhYzczOWM2OGEzYjQ0MTMxNzYxNjUKFgj32OC__fX5BBDV-8yMBhiwFDgIQDgaAmxmIiA3N2E2YTljNmNlMjkxOGM2MTcyMmNiZWE2OGRmNjEzNA; n_mh=QbPssrbM29NpazEadSkoqlPSS1mo_iwFY3SKNiUx7rM; tt_scid=PeWBxPUwfxb83eeifcRi2Hoo9ybTr3MfT5XHaAA0x.TNy8wrNQNUIBIdI5nJji.L9ac1`;
      // const cookiesString =
      //   '_ga=GA1.2.952896634.1637039558; _gid=GA1.2.1694497513.1637039558; MONITOR_WEB_ID=e3dc8cb2-a089-4279-8ded-053ab1cea4a5; passport_csrf_token_default=ba91c1abbab054c70e14bc9afd096954; passport_csrf_token=ba91c1abbab054c70e14bc9afd096954; sid_guard=77a6a9c6ce2918c61722cbea68df6134%7C1637039573%7C5184000%7CSat%2C+15-Jan-2022+05%3A12%3A53+GMT; uid_tt=71daef717f26c25008059fe2aac4866e; uid_tt_ss=71daef717f26c25008059fe2aac4866e; sid_tt=77a6a9c6ce2918c61722cbea68df6134; sessionid=77a6a9c6ce2918c61722cbea68df6134; sessionid_ss=77a6a9c6ce2918c61722cbea68df6134; sid_ucp_v1=1.0.0-KGUxMTNkNjRkYmRlOTBlNWI2YmRhYzczOWM2OGEzYjQ0MTMxNzYxNjUKFgj32OC__fX5BBDV-8yMBhiwFDgIQDgaAmxmIiA3N2E2YTljNmNlMjkxOGM2MTcyMmNiZWE2OGRmNjEzNA; ssid_ucp_v1=1.0.0-KGUxMTNkNjRkYmRlOTBlNWI2YmRhYzczOWM2OGEzYjQ0MTMxNzYxNjUKFgj32OC__fX5BBDV-8yMBhiwFDgIQDgaAmxmIiA3N2E2YTljNmNlMjkxOGM2MTcyMmNiZWE2OGRmNjEzNA; n_mh=QbPssrbM29NpazEadSkoqlPSS1mo_iwFY3SKNiUx7rM';
      const cookieList = [];
      cookiesString.split(';').forEach((el) => {
        const data = el.split('=');
        cookieList.push({ name: data[0].trim(), value: data[1].trim() });
      });
      console.log(cookieList);

      cookieList.forEach(async ({ name, value }) => {
        await page.setCookie({ name, value });
      });
      resolve(true);
    });
  }
  singGitHub() {
    const userName = '13271150671@wo.cn';
    const passWord = 'woziji@13271150671';
    const url =
      'https://github.com/login?client_id=60483ab971aa5416e000&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D60483ab971aa5416e000%26redirect_uri%3Dhttps%253A%252F%252Fjuejin.cn%252Fpassport%252Fauth%252Flogin_success%26scope%3Duser%253Aemail%26state%3Dbc346bc13gASoVCgoVPZIGZiM2JkNjA4ZjAzZWFjNzY0ZTI3ZTgwOGQ2NTU0YmNjoU6-aHR0cHM6Ly9qdWVqaW4uY24vb2F1dGgtcmVzdWx0oVYBoUkAoUQAoUHRCjChTdEKMKFIqWp1ZWppbi5jbqFSBKJQTNEEFaZBQ1RJT06goUyyaHR0cHM6Ly9qdWVqaW4uY24voVTZIDMzYjQ0NmNmNDhhMmZmNWE0YmEyYzVmMjA5YTc3Njk1oVcAoUYAolNBAKFVww%253D%253D';
  }
  // 创建爬虫任务
  async sigIn(userName, password) {
    const url = 'https://juejin.cn';
    const githubUrl =
      'https://github.com/login?client_id=60483ab971aa5416e000&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D60483ab971aa5416e000%26redirect_uri%3Dhttps%253A%252F%252Fjuejin.cn%252Fpassport%252Fauth%252Flogin_success%26scope%3Duser%253Aemail%26state%3Dbc346bc13gASoVCgoVPZIGZiM2JkNjA4ZjAzZWFjNzY0ZTI3ZTgwOGQ2NTU0YmNjoU6-aHR0cHM6Ly9qdWVqaW4uY24vb2F1dGgtcmVzdWx0oVYBoUkAoUQAoUHRCjChTdEKMKFIqWp1ZWppbi5jbqFSBKJQTNEEFaZBQ1RJT06goUyyaHR0cHM6Ly9qdWVqaW4uY24voVTZIDMzYjQ0NmNmNDhhMmZmNWE0YmEyYzVmMjA5YTc3Njk1oVcAoUYAolNBAKFVww%253D%253D';

    // const url = 'https://baidu.com/';
    // 创建一个puppetter 启动一个浏览器环境
    // headless 是否打开浏览器窗口页面
    const browser = await puppeteer.launch({ headless: true });
    // 打开新页面
    const page = await browser.newPage();
    // 通过url打开指定页面
    // github认证页面
    const githubPage = await browser.newPage();
    await githubPage.goto(githubUrl);
    const githubBody = await githubPage.$('body');
    // 监听console.log 否则page.evaluate里面的console看不到
    githubPage.on('console', (msg) => {
      for (let i = 0; i < msg.args().length; ++i)
        console.log(`githubPage: ${msg.args()[i]}`); // 这句话的效果是打印到你的代码的控制台
    });
    console.log('--');
    console.log({ userName, password });

    await githubBody.evaluate((data: any, userName, password) => {
      console.log(data);
      console.log('userName', userName);
      console.log('password', password);

      (document as any).querySelector('#login_field').value = userName;
      (document as any).querySelector('#password').value = password;
      (document as any)
        .querySelector('.btn.btn-primary.btn-block.js-sign-in-button')
        .click();
    }, userName, password);
    await page.goto(url);
    await page.waitForTimeout(10000);
    githubPage.close();
    await page.goto('https://juejin.cn/user/center/signin?from=avatar_menu');

    // 监听console.log 否则page.evaluate里面的console看不到
    page.on('console', (msg) => {
      for (let i = 0; i < msg.args().length; ++i)
        console.log(`page: ${msg.args()[i]}`); // 这句话的效果是打印到你的代码的控制台
    });
    page.on('pageerror', (error) => {
      console.log('加载页面失败', error);
    });
    const bodyHandle = await page.$('body');
    // 代码运行到浏览器里面。不是后台服务里面
    const msg = await page.evaluate((body) => {
      let msg = '';
      const btn: any = body.querySelector('.signin.btn');
      if (btn) {
        btn.click();
        msg = '签到成功';
      } else {
        body.querySelector('.signedin.btn').click();
        msg = '已经签到';
      }
      return Promise.resolve(msg);
    }, bodyHandle);
    // 等待一定时间 已废弃
    page.waitForTimeout(5000);
    // 关闭浏览器
    await page.close();

    return { success: true, data: msg };
  }

  // async findData(page) {
  //   const data= await page.
  // }
}
