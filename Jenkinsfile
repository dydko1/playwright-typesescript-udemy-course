pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.50.1-noble'
    } 
  }
  environment {
        //HOME = '''${WORKSPACE}'''
        // or override npm's cache directory (~/.npm)
        //NPM_CONFIG_CACHE = '''${WORKSPACE}/.npm'''
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test
        '''
      }
 
    }
  }
}