import React, { ReactElement } from 'react'
import { useRouteMatch } from 'react-router-dom'

const generatePage: (page: string) => ReactElement = (page) => {
  const component = () => require(`./pages/${page}`).default

  try {
    return React.createElement(component())
  } catch (err: unknown) {
    // tslint:disable-next-line: no-console
    console.warn(err)
    return React.createElement(() => <h2>404</h2>)
  }
}

const PageRenderer: React.FC = () => {
  const {
    params: { page },
  } = useRouteMatch<{ page: string }>()

  return generatePage(page)
}

export default PageRenderer
