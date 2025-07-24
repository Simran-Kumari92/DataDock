#Bugs

## Setting up lint and prettier -190725 9pm

- got dependency tree conflict error when installing eslint and prettier
- reason: the version of eslint and prettier were not compatible with the current version of nextjs
- !solution: restarted the project with an old version of next js --failed later
- command: `npx create-next-app@15.0.2`  

## Setting up lint and prettier -190725 11pm

- found critical error, and app crashed
- reason: next js older vesion was not safe and had security issues, not allowed to use it
- solution: updated next js to the latest version
- command: `npx create-next-app@latest`
- the problem of dependency tree conflict error reappeared, it was because the latest version of next js needs set up of eslint and prettier in a different way (updated way)
- a tutorial is available on youtube, https://www.youtube.com/watch?v=Mloeq7mvI00&t=13s
- the lint config file is now `eslint.config.mjs` instead of `.eslintrc.json`

## Both eslint and tailwind css have updated their versions. --2007 12pm
- the use guide has changed so much
- soln: for eslint, i followed a youtube tutorial on latest version : https://www.youtube.com/watch?v=Mloeq7mvI00&t=13s
- for tailwind css, i went throught the updated documentation of v4 , it showed we dont need separate config.js file, .css file is enough 
- the use guide of tailwind css is changed now.

## sometimes the tailwind is not working

## eslint for tailwind v4 is under development, beta vesion is available temporarily

## styling crash
- tailwind css global.css file is not working properly.
- due to version change
- !important in @apply needed to be removed. 
- still many errors
- i should learn tailwind css v4 first, then come back to this project