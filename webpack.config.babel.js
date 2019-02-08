import webpackConfigJaid from "webpack-config-jaid"

export default webpackConfigJaid({
  documentation: {
    babel: true,
  },
  type: "lib",
  publishimo: {
    publishimoOptions: {
      fetchGithub: true,
    },
  },
})