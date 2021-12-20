import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faStream, faSortNumericDown, faSortNumericDownAlt, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import ThemeProvider from 'providers/ThemeProvider'

config.autoAddCss = false;
library.add(faStream, faSortNumericDownAlt, faSortNumericDown, faMoon, faSun);

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'highlight.js/styles/darcula.css'
import 'react-toggle/style.css'
import 'styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
