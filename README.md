## Steps for deploying gatsby website to gh-pages

This follows steps [here](http://jarednielsen.com/deploy-gatsbyjs-github-pages-user/) for deploying to github.io with my own domain name.

1. ```source activate website``` to activate the conda environment that has npm installed
2. install a starter from one of the templates [here](https://codebushi.com/gatsby-starters-and-themes/). For example, ```gatsby new <repo name> https://github.com/codebushi/gatsby-starter-stellar```
3. ```cd <repo name>```
4. ```gatsby develop```
5. create an empty repo on GitHub with no readme or .gitignore
6. add the remote: ```git remote add origin <repo url>```
7. make changes to the configuration files shown [here](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)
8. If you haven't done so yet, install gh-pages ```npm install gh-pages --save-dev```
12. Publish the page to gh-pages: ```npm run deploy``` (you will be asked to provide git username and password)

### If you have your own domain name:

1. Create a file called CNAME and put it in the root ```public``` folder on master. CNAME should contain the URL of your domain name. Note this is different from what is advised online, to put it in the ```static``` folder.


