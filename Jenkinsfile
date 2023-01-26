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
				withEnv(["HOME=${env.WORKSPACE}"]){
					sh "pip install --user -r requirements.txt"
					sh "python main.py"
				}
			}
		}
		
	}
}
		
