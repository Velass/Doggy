pipeline {
  agent any
  tools {
    maven 'Maven 3.9.8'
  }
  stages {
    stage ('checkout') {
      steps {
        git 'https://github.com/Velass/Doggy'
      }
    }
    stage('Build') {
      steps {
        sh 'mvn clean package' //compile le package du projet
      }
    }
    stage('SonarQube Analysis') {
      steps {
        script {
          def mvnHome = tool 'Maven 3.9.8' //utilise le nom du tool maven configuré dans Jenkins
          withSonarQubeEnv('SonarQube'){ //nom de la connexion SonarQube dans Jenkins
            sh "${mvnHome}/bin/mvn clean verify sonar:sonar -Dsonar.projectKey=Doggy -Dsonar.projectName='Doggy'"
            // Dsonar.projectKey=Vulnado -Dsonar.projectName='Vulnado doivent correspondre au nom du projet crée dans sonarQube
          }
        }
      }
    }
  }
}
