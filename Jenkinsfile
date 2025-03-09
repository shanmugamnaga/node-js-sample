pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/shanmugamnaga/node-js-sample.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    def npmHome = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${npmHome}/bin:${env.PATH}"
                    bat 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        always {
            echo 'Pipeline Completed'
        }
    }
}
