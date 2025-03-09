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
                    bat "rmdir /s /q \"${destinationPath}\" && mkdir \"${destinationPath}\""

                    bat "xcopy /Y \"${env.WORKSPACE}\\package.json\" \"${destinationPath}\""
                    bat "xcopy /Y \"${env.WORKSPACE}\\package-lock.json\" \"${destinationPath}\""
                    bat "xcopy /Y \"${env.WORKSPACE}\\index.js\" \"${destinationPath}\""

                    // Copy directories including node_modules
                    bat "xcopy /E /I /Y \"${env.WORKSPACE}\\public\" \"${destinationPath}\\public\""
                    bat "xcopy /E /I /Y \"${env.WORKSPACE}\\node_modules\" \"${destinationPath}\\node_modules\""

                    // Change Directory & Start Application
                    bat "cd /d \"${destinationPath}\" && start /B cmd /k \"node index.js\""

                    
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
