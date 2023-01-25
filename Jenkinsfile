pipeline{
	agent any
	tools{nodejs "node"}
	stages{
		stage("Building"){
			steps{
				sh "npm init -y"
				sh "npm install mongoose"
			}
		}
		stage("Testing"){
			steps{
				sh "pip3 install -r requirements txt"
				sh "py main.py"
			}
		}
	}
}
		
