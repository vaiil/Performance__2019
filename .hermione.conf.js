module.exports = {
  baseUrl: 'http://localhost:9000',
  gridUrl: 'http://localhost:4444/wd/hub',
  browsers: {
    full: {
      desiredCapabilities: {
        browserName: 'chrome'
      },
      compositeImage: true,
    },
    1280: {
      compositeImage: true,
      windowSize: { width: 1280, height: 4000 },
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    768: {
      compositeImage: true,
      windowSize: { width: 768, height: 4000 },
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    375: {
      compositeImage: true,
      windowSize: { width: 375, height: 4000 },
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
