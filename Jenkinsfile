pipeline {
    agent any  // Runs on any available Jenkins agent

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/shanmugamnaga/node-js-sample.git'
            }
        }
    }
    
    stage('Install Dependencies') {
            steps {
                script {
                    def npmHome = tool name: 'NodeJS', type: 'hudson.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${npmHome}/bin:${env.PATH}"
                    sh 'npm install'
                }
            }
        }
}