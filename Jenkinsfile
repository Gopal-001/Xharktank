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
				sh "apt-get install python-pip"
				sh "python -m ensurepip --upgrade"
				sh "C:\Users\samee\AppData\Local\Microsoft\WindowsApps\pip install -r requirements txt"
				sh "py main.py"
			}
		}
	}
}
		
