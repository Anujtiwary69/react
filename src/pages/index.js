import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LoadingBar from "react-top-loading-bar";


class IndexPage extends React.Component{
  state = {
    loadingBarProgress: 10
  };
  add = value => {
    this.setState({
      loadingBarProgress: this.state.loadingBarProgress + value
    });
  };
  startFetch = () => {
    this.LoadingBar.startContinous()
  }

  onFinishFetch = () => {
    this.LoadingBar.complete()
  }
  

  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 });
  };

  componentDidMount(){
    // alert(1);
    // this.setState({
    //   loadingBarProgress:30
    // })
    // this.LoadingBar.complete()
  }
  componentWillMount(){
    // this.LoadingBar.continousStart()
  }
  render(){
    return(
      <div>
          <LoadingBar onRef={ref => (this.LoadingBar = ref)} />
         
         <Layout/>
      </div>
      
    )
  }
}

export default IndexPage
