// @flow
export default {
  versionCodeFromVersion(version) {
    const [MAJOR, MINOR, PATCH] = version.split('.').map(Number);
    return MAJOR * unit * unit + MINOR * unit + (PATCH != null ? PATCH : 0);
  }
};
