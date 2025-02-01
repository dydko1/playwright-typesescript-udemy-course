Feature: Conduit Login Functionality

Scenario: Login and Logout with valid credrentials
Given I am on the conduit login page
When I login with valid credrentials
And I click on the setting button
And I click on the logout button
Then I route back to the login page