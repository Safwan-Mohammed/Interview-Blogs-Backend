pipeline {
    agent any
    environment{
        RAILWAY_API_TOKEN = credentials('JENKINS_RAILWAY_AUTH')
    }
    stages {
        stage('Setup Node and Install Dependencies') {
            agent {
                docker {
                    image 'node:22-alpine3.20'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    node --version
                    npm --version
                    npm install
                    npm install @railway/cli
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    node_modules/.bin/railway run node index.js
                '''
            }
        }
    }
}
