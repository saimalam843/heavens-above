// generate-release-notes.js

// Import necessary modules
const { execSync } = require('child_process');
const fs = require('fs');

// Function to generate release notes
function generateReleaseNotes() {
    // Get the latest git commit messages
    const commitMessages = execSync('git log --pretty=format:"%s"').toString().split('\n');
    
    // Write commit messages to a release notes file
    fs.writeFileSync('RELEASE_NOTES.md', '## Release Notes\n\n');
    commitMessages.forEach((message, index) => {
        fs.appendFileSync('RELEASE_NOTES.md', `- ${message}\n`);
    });

    console.log('Release notes generated successfully.');
}

// Export the function
module.exports = generateReleaseNotes;

// Call the function to generate release notes
generateReleaseNotes();
