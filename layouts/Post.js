import styled from 'styled-components'
import Page from './main'

const Article = styled.article`font-size: 14px;`

export default ({ children }) =>
  <Page>
    <Article>
      {children}
    </Article>
  </Page>
