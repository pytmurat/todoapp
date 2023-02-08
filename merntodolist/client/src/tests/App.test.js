import {render,screen} from"@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../App.js"
import Input from "../components/input.js"
import Table from "../components/table.js"
import {
  getRowByFirstCellText,
  getAllCells
} from 'testing-library-table-queries'
import { tab } from "@testing-library/user-event/dist/tab.js"

test("Header render corretly",()=>{
  //! app i render ettik
  render(<App/>)
  //! hangi elemanı test edeceksek ona erişiyoruz
  const headerEl = screen.getByText(/todoapp/i)
  //! 1.test eleman dom un ıcınde mı ?
  expect(headerEl).toBeInTheDocument()
  //! elemanın içerigi todoapp mi ? 
  expect(headerEl).toHaveTextContent("todoapp")
  
})  

test("input contoller ",()=>{
  render(<Input/>)
  const inputBaslik = screen.getByPlaceholderText("baslık")
  const inputGorevEkle = screen.getByPlaceholderText("Gorev Ekle")

  expect(inputBaslik).toHaveValue("")
  expect(inputGorevEkle).toHaveValue("")


})

test("user input change",()=>{
  render(<Input/>)

  const inputBaslik = screen.getByPlaceholderText("baslık")
  const inputGorevEkle = screen.getByPlaceholderText("Gorev Ekle")

  expect(inputGorevEkle).toHaveValue("")
  expect(inputBaslik).toHaveValue("")

  userEvent.type(inputBaslik,"görev ekle")
  userEvent.type(inputGorevEkle,"eklendi")


  expect(inputBaslik).toHaveValue("görev ekle")
  expect(inputGorevEkle).toHaveValue("eklendi")
})

test(" click Ekle button",()=>{
  render(<Input/>)
  const inputBaslik = screen.getByPlaceholderText("baslık")
  const inputGorevEkle = screen.getByPlaceholderText("Gorev Ekle")
  const ekleButton = screen.getByRole("button",{name:/Ekle/i})

  expect(inputGorevEkle).toHaveValue("")
  expect(inputBaslik).toHaveValue("")

  userEvent.type(inputBaslik,"python çalış")
  userEvent.type(inputGorevEkle,"sınıf yapısı")
  userEvent.click(ekleButton)
  

  //? toploya ulasamadım


})


