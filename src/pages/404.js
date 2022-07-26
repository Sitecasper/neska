import React from 'react'
import Layout from '../components/layout'

class Default404 extends React.Component {
  render() {
    return <Layout location={this.props.location}>404. Page not found.</Layout>
  }
}
export default Default404
