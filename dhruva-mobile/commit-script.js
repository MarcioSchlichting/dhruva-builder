const { exec } = require('child_process');

const message = process.argv[2];

if (!message) {
  console.error('Please provide a commit message.');
  process.exit(1);
}

exec('git add .', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Added changes to staging area: ${stdout}`);

  exec(`git commit -m "${message}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Committed changes with message "${message}": ${stdout}`);

    exec('git push', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      console.log(`Pushed changes to remote repository: ${stdout}`);
    });
  });
});
