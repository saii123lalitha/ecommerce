pipeline {
    agent any
    tools { nodejs "NodeJS" }
    environment {
        DOCKER_IMAGE = "ecommerce"
        CONTAINER_NAME = "myapp"
        PORT = "80"
    }
    stages {
        stage('Source') {
            steps {
                git 'https://github.com/mdjawad0/Ecommerce-React-AWS.git'
                sh "npm install"
                echo 'Source Stage Finished'
            }
        }

        stage('Test') {
            steps {
                echo 'Test Stage Finished'
            }
        }

        stage('Build') {
            steps {
                sh "npm run build"
                echo 'Build Stage Finished'
            }
        }

        stage('Dockerize') {
            steps {
                script {
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                }
                sh "docker build -t ${DOCKER_IMAGE} ."

                // Run Docker container in detached mode
                sh "docker run -d -p ${PORT}:80 --name ${CONTAINER_NAME} ${DOCKER_IMAGE}"
            }
        }
    }
}
