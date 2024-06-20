#Author: Awake Lanka
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
Feature: Login Page
User Req for testing the authentication

# Background: Visit Login Page
#   Given I landed on Login Page

@smoke
Scenario: Welcome to Login Page
  Given I see Login Page with title
  And I should see Menu with 4 items

@smoke
Scenario: Show dropdown menu
  Given I see 4 Menu Items
  And I should see 2 item is disabled
  When I mouseover on 3 item
  And I see dropdown menu

