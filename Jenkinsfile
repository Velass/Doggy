pipeline {
  agent any
  tools {
    nodejs 'NodeJs' // NodeJs' est configuré dans Jenkins
  }
  stages {
    stage ('Checkout') {
      steps {
        git 'https://github.com/Velass/Doggy'
      }
    }
    stage ('Dependencies') {
      steps {
        sh 'npm install -g @ionic/cli' // Installe Ionic CLI globalement
        sh 'npm install' // Installer les dépendances
      }
    }
    stage('Build') {
      steps {
        sh 'ionic build' // Construire le projet Ionic
      }
    }
    stage('SonarQube Analysis') {
      steps {
        script {
          withSonarQubeEnv('SonarQube') { // Nom de la connexion SonarQube dans Jenkins
            sh '''
              npm install sonar-scanner -g
              sonar-scanner \
                -Dsonar.projectKey=Doggy \
                -Dsonar.projectName="Doggy" \
                -Dsonar.sources=src
            '''
          }
        }
      }
    }
  }
}
