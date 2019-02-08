/** @module resolve-pkg-option */

/**
 * @typedef result
 * @type {object}
 * @property {object} pkg The final pkg data
 * @property {string|false} path The file path where the pkg data got loaded from
 */

/**
 * @typedef options
 * @type {object}
 * @property {boolean} [normalize=true] Apply normalize-package-data
 * @property {boolean} [json5=true] Parse package.json with json5
 */

import fs from "graceful-fs"
import normalizePackageData from "normalize-package-data"
import json5 from "json5"
import findupSync from "findup-sync"

/**
 * Loads a package.json or prepares given pkg data
 * @param {object|string} pkg Either a path where the package.json is searched at, or pkg data as an object
 * @param {options} options Resolving options
 * @returns {result} Resolving result with package data and an optional file path
 * @example
 * resolvePkgOption({name: " test"})
 * // { path: false, pkg: {name: "test"} }
 * @example
 * resolvePkgOption({name: " test"}, {normalize: false})
 * // { path: false, pkg: {name: " test"} }
 */
export const sync = (pkg, options) => {
  options = {
    normalize: true,
    json5: true,
    ...options,
  }
  const transform = pkgData => {
    const transformedPkgData = {...pkgData}
    if (options.normalize) {
      normalizePackageData(transformedPkgData)
    }
    return transformedPkgData
  }
  if (typeof pkg === "object") {
    return {
      pkg: pkg |> transform,
      path: false,
    }
  }
  if (typeof pkg === "string") {
    const loadFromFile = path => {
      const content = fs.readFileSync(path, "utf8")
      const pkgData = (options.json5 ? json5 : JSON).parse(content)
      return {
        path,
        pkg: pkgData |> transform,
      }
    }
    if (fs.existsSync(pkg)) {
      const stat = fs.statSync(pkg)
      if (stat.isFile()) {
        return loadFromFile(pkg)
      } else if (stat.isDirectory()) {
        const globs = ["package.json"]
        if (options.json5) {
          globs.push("package.json5")
        }
        const foundFile = findupSync(globs, {
          cwd: pkg,
          nocase: true,
        })
        if (foundFile) {
          return loadFromFile(foundFile)
        }
      }
    }
  }
  return {
    pkg: {},
    path: false,
  }
}

/**
 * Loads a package.json or prepares given pkg data
 * @async
 * @function default
 * @param {object|string} pkg Either a path where the package.json is searched at, or pkg data as an object
 * @param {options} options Resolving options
 * @returns {Promise<result>} Resolving result with package data and an optional file path
 * resolvePkgOption({name: " test"})
 * // { path: false, pkg: {name: "test"} }
 * @example
 * resolvePkgOption({name: " test"}, {normalize: false})
 * // { path: false, pkg: {name: " test"} }
 */
export default async (pkg, options) => sync(pkg, options)