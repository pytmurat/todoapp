import {test,expect} from "@playwright/test"

test("add to todo list",async({page})=>{
  await page.goto("http://localhost:3001/")
  await page.pause()
  //await page.click("//button[text()='bitti']") butona tıklama
  await page.locator("//input[@placeholder='baslık']").fill("python çalış")
  await page.locator("//input[@placeholder='Gorev Ekle']").fill("konu olarak sınıf yapılarına bak")
  await page.click("//button[text()='Ekle']")

  
})

test("delete to todo list",async({page})=>{
  await page.goto("http://localhost:3001/")
  await page.pause()

  await page.click("//button[text()='bitti']")
})

test("how many row  ",async ({page})=>{
  await page.goto("http://localhost:3001/")
  await page.pause()

  await expect(page.locator("(//div[@class='App']//tr)")).toHaveCount(4)
  


})
