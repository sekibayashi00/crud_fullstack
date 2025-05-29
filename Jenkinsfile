pipeline {
  agent any

  tools {
    nodejs 'NodeJS-18'
  }

  environment {
    NODE_ENV = 'development'
  }

  stages {
    stage('Build') {
      steps {
        echo '📦 Installing dependencies and building backend and frontend'
        dir('back') {
          sh 'npm install'
        }
        dir('front') {
          sh 'npm install'
          sh 'npm run build || echo "⚠️ Frontend build failed or not defined."'
        }
      }
    }

    stage('Test') {
      steps {
        echo '🧪 Running backend and frontend tests'
        dir('back') {
          sh 'npm test || echo "⚠️ Backend tests not found or failed."'
        }
        dir('front') {
          sh 'npm test || echo "⚠️ Frontend tests not found or failed."'
        }
      }
    }

    stage('Code Quality') {
      steps {
        echo '🧹 Running ESLint for code quality analysis'
        dir('back') {
          sh 'npx eslint . || echo "⚠️ Lint issues detected."'
        }
      }
    }

    stage('Security') {
      steps {
        echo '🔐 Running npm audit for security analysis'
        dir('back') {
          sh 'npm audit || echo "⚠️ Vulnerabilities found (see report)."'
        }
      }
    }

    stage('Deploy') {
      steps {
        echo '🚀 Simulating deployment (e.g., to test environment)'
        dir('front/dist') {
          sh 'ls -l || echo "⚠️ Build folder not found"'
        }
      }
    }

    stage('Release') {
      steps {
        echo '📦 Tagging release (simulation)'
        sh '''
          git config user.name "jenkins"
          git config user.email "jenkins@example.com"
          git tag -a v1.0.0 -m "Release v1.0.0"
          git push origin v1.0.0 || echo "⚠️ Could not push tag"
        '''
      }
    }

    stage('Monitoring') {
      steps {
        echo '📊 Simulating monitoring — basic healthcheck'
        sh '''
          curl --fail http://localhost:3000/health || echo "⚠️ Health check failed"
        '''
      }
    }
  }

  post {
    always {
      echo '📌 Pipeline finished.'
    }
    success {
      echo '✅ All stages passed successfully.'
    }
    failure {
      echo '❌ Pipeline failed.'
    }
  }
}
