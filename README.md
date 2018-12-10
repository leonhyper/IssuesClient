# Assignment 2 - Vue app - Automated development process.

Name: Sheng Zhu

Student No.:  20082253

## Overview.

This vue client contains 5 components 'Home', 'Issues', 'AddIssue', 'Login' and 'Register'.
Functions as view list, change issue status, delete issue, add issue, log in and sign up are implemented.
Background music is attached to the home page.

## E2E Testing.

. . . A listing of the output generated locally from running ONE of your spec test files (choose the best one). The command to produce this is similar to the following:

     $ npx cypress run --spec cypress/integration/addIssue.cypress.spec.js

     Running: addIssue.cypress.spec.js...                                                     (1 of 1)


       AddIssue page
         √ allows a valid issue to be submitted (9275ms)
         √ shows error messages for incomplete form fields (2738ms)


       2 passing (12s)


       (Results)

       ┌────────────────────────────────────────┐
       │ Tests:        2                        │
       │ Passing:      2                        │
       │ Failing:      0                        │
       │ Pending:      0                        │
       │ Skipped:      0                        │
       │ Screenshots:  0                        │
       │ Video:        false                    │
       │ Duration:     12 seconds               │
       │ Spec Ran:     addIssue.cypress.spec.js │
       └────────────────────────────────────────┘


     ====================================================================================================

       (Run Finished)


           Spec                                                Tests  Passing  Failing  Pending  Skipped
       ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
       │ √ addIssue.cypress.spec.js                  00:12        2        2        -        -        - │
       └────────────────────────────────────────────────────────────────────────────────────────────────┘
         All specs passed!                           00:12        2        2        -        -        -


## Continuous Integration.

. . . URL of the Travis build page for the Vue app, e.g.

https://travis-ci.org/diarmuidoconnor/donationsSPA

## Automated Deployment.

.... Specify the URL of the auto-deployed Vue app, e.g.

http://outstanding-whistle.surge.sh

## Extra features.

Travis ci and auto deployment succeeded.

## Appendix.

. . . .  A listing of the output generated from running locally all of your spec test files. The command to produce this is:

     $ npx cypress run

(Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    3.1.3                                                                              │
  │ Browser:    Electron 59 (headless)                                                             │
  │ Specs:      3 found (addIssue.cypress.spec.js, home.cypress.spec.js, login.cypress.spec.js)    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running: addIssue.cypress.spec.js...                                                     (1 of 3)


  AddIssue page
    √ allows a valid issue to be submitted (3850ms)
    √ shows error messages for incomplete form fields (1380ms)


  2 passing (5s)


  (Results)

  ┌────────────────────────────────────────┐
  │ Tests:        2                        │
  │ Passing:      2                        │
  │ Failing:      0                        │
  │ Pending:      0                        │
  │ Skipped:      0                        │
  │ Screenshots:  0                        │
  │ Video:        false                    │
  │ Duration:     5 seconds                │
  │ Spec Ran:     addIssue.cypress.spec.js │
  └────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running: home.cypress.spec.js...                                                         (2 of 3)


  Home page
    √ Shows a header (2126ms)
    Navigation bar
      √ Shows the required links (1328ms)
      √ Redirects when links are clicked (695ms)


  3 passing (4s)


  (Results)

  ┌────────────────────────────────────┐
  │ Tests:        3                    │
  │ Passing:      3                    │
  │ Failing:      0                    │
  │ Pending:      0                    │
  │ Skipped:      0                    │
  │ Screenshots:  0                    │
  │ Video:        false                │
  │ Duration:     4 seconds            │
  │ Spec Ran:     home.cypress.spec.js │
  └────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running: login.cypress.spec.js...                                                        (3 of 3)


  Login page
    √ allows a user with valid name and password to login (3544ms)
    √ shows error message if either name and pass is valid  (1056ms)
    √ skip to sign up page after sign up button is clicked (525ms)


  3 passing (5s)


  (Results)

  ┌─────────────────────────────────────┐
  │ Tests:        3                     │
  │ Passing:      3                     │
  │ Failing:      0                     │
  │ Pending:      0                     │
  │ Skipped:      0                     │
  │ Screenshots:  0                     │
  │ Video:        false                 │
  │ Duration:     5 seconds             │
  │ Spec Ran:     login.cypress.spec.js │
  └─────────────────────────────────────┘


====================================================================================================

  (Run Finished)


      Spec                                                Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √ addIssue.cypress.spec.js                  00:05        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √ home.cypress.spec.js                      00:04        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √ login.cypress.spec.js                     00:05        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                           00:14        8        8        -        -        -
