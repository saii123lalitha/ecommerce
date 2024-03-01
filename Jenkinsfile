pipeline {
    agent any
    tools { nodejs "NodeJS" }
    environment {
        DOCKER_IMAGE = "ecommerce"
        CONTAINER_NAME = "myapp"
        ELASTIC_IP = "35.168.30.13"
    }
    stages {
        stage('Source') {
            steps {
                git 'https://github.com/saii123lalitha/ecommerce.git'
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

        stage('Deploy') {
            steps {
                script {
                    // Clean up unused Docker images
                    sh "docker image prune -f"
                    
                    // Start Docker if it's not already running
                    sh "sudo systemctl start docker || true"
                    
                    // Stop and remove the container if it exists
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    
                    // Build Docker image
                    sh "docker build -t ${DOCKER_IMAGE} ."

                    // Run Docker container in detached mode with the Elastic IP passed as environment variable
                    sh "docker run -d -p 5173:5173 --name ${CONTAINER_NAME} -e BACKEND_IP=${ELASTIC_IP} ${DOCKER_IMAGE}"
                }
                echo 'Deploy Stage Finished'
            }
        }
    }
}
