pipeline {
    agent any  // Runs on any available Jenkins agent

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/shanmugamnaga/node-js-sample.git'
            }
        }
}