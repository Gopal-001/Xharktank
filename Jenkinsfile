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
				sh "C:\Users\samee\AppData\Local\Microsoft\WindowsApps\pip.exe install -r requirements txt"
				sh "py main.py"
			}
		}
		
	}
}
		
