import webpackConfigJaid from "webpack-config-jaid"

export default webpackConfigJaid({
  documentation: true,
  type: "lib",
  publishimo: {
    publishimoOptions: {
      fetchGithub: true,
    },
  },
})