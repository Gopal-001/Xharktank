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
				sh "pip install -r requirement.txt"
				sh "python main.py"
			}
		}
		
	}
}
		
