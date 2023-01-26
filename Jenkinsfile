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
		stage("Testings"){
			steps{
				sh "pip install --target ${env.WORKSPACE} -r requirements.txt"
				sh "py main.py"
			}
		}
		
	}
}
		
