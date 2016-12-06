# React LinkedIn Login Button

```sh
react-linkedin-login
```

```js
import React from 'react'
import LinkedIn from 'react-linkedin-login'
import styles from './styles.css'
import autobind from 'autobind-decorator'

export default class LoginWithLinkedin extends React.Component {

  static propTypes = {

  }

  @autobind
  callbackLinkedIn ({code, redirectUri}) {
    // Login with linkedin
  }

  render () {
    return (
      <LinkedIn
        clientId='xxx'
        callback={this.callbackLinkedIn}
        className={styles.linkedin}
        text='LinkedIn' />
    )
  }

}

```
