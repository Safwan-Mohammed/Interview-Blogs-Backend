pipeline {
    agent any
    environment {
        RAILWAY_TOKEN = credentials('JENKINS_RAILWAY_AUTH')
        RAILWAY_SERVICE_NAME = 'appealing-elegance'
        TAG = "B1.0"
        IMAGE_NAME = "lightgaia/blogs-practice-images"
        DOCKERHUB_PSW = credentials('JENKINS_DOCKER_HUB_AUTH')
        DOCKERHUB_USR = "lightgaia"
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
                '''
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker run -t $IMAGE_NAME:$TAG .'
            }
        }
        stage('Dockerhub Login') {
            steps {
                sh "docker login -u ${DOCKERHUB_USR} -p ${DOCKERHUB_PSW}"
            }
        }
        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME:$TAG'
            }
        }
    }
}
