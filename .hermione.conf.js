module.exports = {
  baseUrl: 'http://localhost:8080',
  gridUrl: 'http://localhost:4444/wd/hub',
  browsers: {
    full: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    1000: {
      windowSize: '1000x4000',
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  },
  plugins: {
    'html-reporter/hermione': {
      path: 'hermione-html-report'
    }
  }
}
