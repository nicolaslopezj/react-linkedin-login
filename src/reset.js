/* global localStorage */
import getQueryParameter from './getQueryParameter'

export default function () {
  const code = getQueryParameter('code')
  const state = getQueryParameter('state')
  let newURL = window.location.href.replace(`code=${code}&state=${state}`, '')
  if (newURL.endsWith('?')) {
    newURL = newURL.slice(0, -1)
  }
  window.history.replaceState(null, null, newURL)
  localStorage.linkedInReactLogin = ''
  localStorage.linkedInReactLoginRedirectUri = ''
}
