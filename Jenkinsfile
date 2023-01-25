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
				bat "py get-pip.py"
				sh "pip install -r requirements txt"
				sh "py main.py"
			}
		}
	}
}
		
