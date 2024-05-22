const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env');

function tinydot(){
   try {
      const envData = fs.readFileSync(envPath, 'utf8');
      const envLines = envData.split('\n');
    
      const envVariables = {};
      for (const line of envLines) {
        let trimmedLine = line.trim()
        if (trimmedLine.startsWith('#') ||!trimmedLine) {
          continue;
        }
        // Remove inline comments
        const commentIndex = trimmedLine.indexOf('#');
        if (commentIndex > -1) {
          trimmedLine = trimmedLine.slice(0, commentIndex).trim();
        }
        const [key, value] = trimmedLine.split('=');
        if (key && value) {
          // parse boolean or number
          if (value === "true") {
            envVariables[key.trim()] = true;
          } else if (value === "false") {
            envVariables[key.trim()] = false;
          } else if (!isNaN(value)) {
            envVariables[key.trim()] = Number(value);
          } else {
            envVariables[key.trim()] = value.trim();
          }
        }
      }
    
      return envVariables
    } catch (error) {
      console.error(error)
      return null
    }
}

module.exports = tinydot