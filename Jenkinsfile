pipeline {
    agent any  // Runs on any available Jenkins agent

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/shanmugamnaga/node-js-sample.git'
            }
        }
        stage('Debug NodeJS Installation') {
            steps {
                script {
                    def tools = jenkins.model.Jenkins.instance.getDescriptorByType(jenkins.plugins.nodejs.tools.NodeJSInstallation.DescriptorImpl).installations
                    echo "Available NodeJS installations: ${tools*.name}"
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    def npmHome = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${npmHome};${env.PATH}"
                    bat 'npm install'
                }
            }
        }
    }
    
        
}