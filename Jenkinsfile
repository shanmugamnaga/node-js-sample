pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/shanmugamnaga/node-js-sample.git'
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
        stage('Copy to Deployment Path') {
            steps {
                script {
                    def destinationPath = "C:\\Users\\shanm\\Downloads\\Dev_Env"

                    bat "xcopy /E /I /Y package.json package-lock.json index.js ${destinationPath}"
                    bat "xcopy /E /I /Y public ${destinationPath}\\public"
                    bat "cd ${destinationPath} && start /B npm start"
                    
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline Completed'
        }
    }
}
