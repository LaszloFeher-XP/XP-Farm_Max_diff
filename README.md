# max diff - easy

https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

## Instructions

You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

    lst contains integers, that means it may contain some negative numbers
    if lst is empty or contains a single element, return 0
    lst is not sorted
```sh
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
```

## User Stories

### 1. First story
As a user
I want to get the difference between the largest and the smallest value in a given list 
So that create the logic

#### Scenarios

#### 1.
Given [0, 1, 2, 3, 4, 5, 6]
When logic
Then returns 6

#### 2.
Given [0, 1, 2, 3, 4, 5]
When logic
Then returns 5

#### 3.
Given [-0, 1, 2, -3, 4, 5, -6]
When logic
Then returns 11

#### 4.
Given [16]
When logic
Then returns 0

#### 5.
Given []
When logic
Then returns 0

# Setting up the environment

## To install dependencies

To install dependencies, run the following:

```npm install```

## To run the tests

To run the tests, there is a script in the project root called test. It calculates code coverage, incorporates watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you can achieve the same with the command the script contains:

```npm test -- --watchAll --collect-coverage --verbose``` 

