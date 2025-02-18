const React = require("react")

const digitalData = require("./src/utils/digital-data")

if (process.env.GATSBY_GALASA_ENV !== "LOCAL") {
  console.log("Non-local build - adding tracking.")

  exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }, pluginOptions) => {
    
    const totalComponents = getHeadComponents()
    totalComponents.push(<script type="text/javascript" dangerouslySetInnerHTML={{
      __html: digitalData
    }}></script>)
    totalComponents.push(<script src="https://1.www.s81c.com/common/stats/ibm-common.js" type="text/javascript" async></script>)
    replaceHeadComponents(totalComponents)
  }
} else {
  console.log("Local build - no tracking.")
}