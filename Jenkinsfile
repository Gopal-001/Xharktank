pipeline{
	agent any
	tools{nodejs "node"}
	stages{
		stage("Build"){
			steps{
				sh "npm init -y"
				sh "npm install mongoose"
			}
		}
		stage("Test"){
			steps{
				sh "pip3 install -r requirements txt"
				sh "py main.py"
			}
		}
	}
}
		
