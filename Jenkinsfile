pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Checkout the source code from the Git repository
                sh 'ls'
                
                // Install dependencies and build the React application
                sh 'npm install'
                sh 'ls'
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            environment {
                SSH_CREDENTIALS = credentials('login-web')
                TARGET_SERVER = 'ec2-user@3.222.188.252'
            }
            steps {
                // Transfer the built files to the target server via SSH
                sshagent(credentials: [SSH_CREDENTIALS]) {
                    sh "scp -r ./build/* ${TARGET_SERVER}:/var/www/html"
                }
            }
        }
    }
}
