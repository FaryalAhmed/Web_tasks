 console.log('before');
 //  const res = getUser(1, Repositories)


 //  function Commits(repos) {
 //      getCommits(repos,[0] displayCommits);
 //  }

 //  function Repositories(user) {
 //      getRepositories(user.gitHubUserName, Commits)
 //  }

 //  function displayCommits(commits) {
 //      console.log(commits);
 //  }     



 async function display() {
     try {
         const user = await getUser(1)
         const repositories = await getRepositories(user.gitHubUserName)
         const commit = await getCommits(repositories[0])
         console.log(commit)
     } catch (err) {
         console.log('Error', err.message)

     }
 }

 display();
 console.log('after ');

 function getUser(id) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             console.log('Reading a user from database...');
             resolve({ id: id, gitHubUserName: 'Faryal' });
         }, 2000)

     });

 }

 function getRepositories(username) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve(['repo1', 'repo2', 'repo3'])
         }, 2000)

     });

 }

 function getCommits(repo) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             console.log('Calling API ');
             resolve(['commit'])
         }, 2000)
     });

 }