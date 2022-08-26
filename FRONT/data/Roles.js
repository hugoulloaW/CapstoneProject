import { Role } from 'testcafe'
import { URLS, CREDENTIALS } from './Constants'
import LoginPage from '../pages/LoginPage'

export const STANDART_USER = Role(URLS.LOGIN_URL, async t => {
  await LoginPage.submitLoginForm(CREDENTIALS.STANDART_USER.USERNAME, CREDENTIALS.STANDART_USER.PASSWORD)
}, { preserveUrl: true })
