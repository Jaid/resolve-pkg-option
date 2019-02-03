import path from "path"

import resolvePkgOption, {sync as resolvePkgOptionSync} from "../src"

it("should get normalized", () => {
  const result = resolvePkgOptionSync({
    name: "test ",
    version: " 1.2.3",
  })
  expect(result).toMatchObject({
    pkg: {
      name: "test",
      version: "1.2.3",
    },
    path: false,
  })
})

it("should run async", async () => {
  const result = await resolvePkgOption({
    name: "test",
  })
  expect(result).toMatchObject({
    pkg: {
      name: "test",
    },
    path: false,
  })
})

it("should find the package.json of this module", () => {
  const result = resolvePkgOptionSync(path.resolve(__dirname, ".."))
  expect(result).toMatchObject({
    pkg: {
      author: {
        name: "Jaid",
        email: "jaid.jsx@gmail.com",
        url: "https://github.com/Jaid",
      },
      babel: {
        presets: ["jaid"],
      },
    },
  })
})

it("should find a json5 package", () => {
  const result = resolvePkgOptionSync(__dirname)
  expect(result).toMatchObject({
    path: expect.stringMatching(/package\.json5$/),
    pkg: {
      name: "is-json5",
    },
  })
})