pipeline{
	agent any
	tools{nodejs "node"}
	stages{
		stage("Build"){
			steps{
				sh "npm install"
				sh "npm install mongoose"
			}
		}
		stage("Run"){
			steps{
				sh "npms start"
			}
		}
	}
}
		
