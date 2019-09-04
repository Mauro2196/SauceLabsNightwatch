node {
    withEnv([
        'SAUCE_USERNAME=zemoga2',
        'SAUCE_ACCESS_KEY=54d2c40f-2f2d-4bfe-8121-b7e1c4a9dcd9'
    ]) {
        // consts
        def AUTOMATE_FOLDER = 'sony-roku-automate'
        def NODE_VER = 'node11'

        stage('Clean up') {
            sh 'rm -rf node_modules/'
        }
        nodejs(nodeJSInstallationName: NODE_VER, configId: null) {
            stage('Setup (nodejs)') {
                // change `node11` for proper node installation name
                sh 'npm install'
            }
            
            stage('Run Tests') {
                sh "./node_modules/.bin/nightwatch -t tests/SampleWithSauceLabs.js -e android_s7_emulator" 
            }
        }
    }
}