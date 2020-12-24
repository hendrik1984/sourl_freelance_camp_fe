# sourl_freelance_camp_fe training project
---

# Version
Angular 2
node 10 for this project
ngbootstrap 1.0.0-alpha.13
---

# How to run this project
1. install node version 10, using brew, run this command
`brew install node@10`

Notes: if you installed the latest node (Up to version >= 12) please make sure unlink and link to the current version node 10 for node and update the ~/.bash_profile to link to node 10

2. install NPM
`brew install npm`

3. install requirement node_module by run this command
`sudo npm install`

4. run the server
`npm start`

# Issues when build this project
1. if you follow udemy course Angular 2 + Rails 5 Bootcamp, the script npm start wont start because there is a script that can't run for node v10 follow this solution to solve and run the project under node v10
Can't run server https://stackoverflow.com/questions/42030393/angular2-error-for-start-tsc-concurrently
 just update the npm start script following this method
 ---

# Useful Links
1. https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
2. https://ng-bootstrap.github.io/#/getting-started

# install Ng Bootstrap issues for this project
why this version because we want use NgbMobule.forRoot() on app.module.ts 

forRoot() function already remove on newer version.

imports: [NgbModule.forRoot()] location app.module.ts

https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap/v/1.0.0-alpha.13