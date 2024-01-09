# Read this first

## desgin principles

1. randomPersonData.js is an array with (nested) objects in the global state.
2. The input into each assignment is the dataset randomPersonDataPurged. This is a copy of'randomPersonData.js', in which object key name with value '' has been replaced by value 'unknown'. This is needed in winc sub-exercise 2 (capricorn women) and  6 (matchmaking). Using this data in the other 4 assignments as well, make the results look consistent.

3. An assignment may not mutate  randomPersonDataPurged.js. A copy must be used for this.
4. Inside file selectedData.js all main functions have as input and output: array with objects (e.g. filter, map, reduce, sort). This is to make them work together more smoothly.
5. The helper functions (e.g. the filter functions such as isZodiacSign) can have other inputs and/or outputs.

6. api between js file selectedData.js and dominteraction.js is array with  objects. So functions between the two files are only allowed to send and receive an array with objects back and forth.

## Error handling

I have added error handling in the code in file selectData.js, but not for each individual fn that I have created.
If for example the dataset does not contain a matching object (e.g. if filter on age < 18 in dataset RandomPersonData.js, then I will get an error). But in the assignments I do not have to filter on age < 18.  

## cleaning the dataset randomPersonData.js

goal: in copy of dataset randomPersonData replace object key name with value '' by value 'unknown'.
relevance: winc sub-exercise 2 (capricorn women) and  6 (matchmaking) require to sort on (first) name. If firstname has value '' in the data), it shows up on top of the list. This looks messy, so I replace this value ''  by value 'unknown'.
I use his cleaned data 'randomPersonDataPurged' in the other 4 assignments as well, to make the results look more concistent.

## Assignment: Working with large arrays and objects

You know the basics of working with objects and arrays. As you program more and more you will encounter more and more complex "data structures". A data structure is a fancy word for a variable that contains several things (such as an array or object).

For example, APIs can regularly give complex results. You should be able to pick the right things from a big amount of data.

You will be working with that kind of data for this exercise. To do this, use the data from the JavaScript file in the GitHub repository below:

[https://github.com/WincAcademy/randomPersonData]

$ git clone this repository in a new folder.
Exercise
This exercise consists of 6 sub-exercises that increase in complexity. Choose a number of sub-questions that you like to make. Each sub-exercise has a number of points. Make sure you make sub exercises that total at least 4 points. Don't dwell too long on this exercise, it is a very big exercise. Maybe you can come back to this later for a replay!

Create an HTML page with buttons.

Each subcommand gets its own button with the name of the subcommand. For example, the button for the first subcommand is named "Country List".

When you click on a button, the previous results disappear and you see the results of the clicked sub-command.

Write small functions that you can reuse.

> Sub-exercise: country list - 1 point

List all countries, sorted by country name.

> Sub exercise: Capricorn women - 3 points
Make a list of people:

show their first and last name and photo

sort the list by their first name

every person on that list must

be a woman
be older than 30 (1990 or older)
be a Capricorn (birthday from December 22 to January 19)
Sub-exercise: old credit cards - 4 points
Some people's credit card is about to expire, we're going to call them to warn them.

Make a list of people:

show the following data per person

first name Last Name
phone number
credit card number
expiration date
The list should contain adults only.

The expiration date must be in the future (this year).

The expiration date must be within the next year.

Sort the list so that the fastest expiring credit cards are at the top.

Read here about how to get the current date. Your script should also work properly in 2 months.

> Sub-question: most people - 3 points
List all countries that appear in the data.

Behind each country should be stated how many of the people in the list live in that country.

The list should be sorted so that the countries with the most people are at the top.

> Sub exercise: average age - 5 points
OK, this one is a bit more complex.

When we press the button for this command, a list of buttons appears. The command buttons also remain.

Each of the new buttons has a country name ("Netherlands" for example).

If we then press one of the country buttons, we see a sentence appear somewhere on the page with the text "The average person in {country} is {years} old".

To show that sentence we need to calculate the average age for that country.

Round the mean age to whole numbers (18.4999 → 18 and 18.5 → 19).

> Sub-exercise: matchmaking - 6 points
This exercise is the hardest.

When we press the button for this command, we see a list of all people.

the list is sorted by first name

we only want to see adults

of each person we see:

first name Last Name
photo
country
age
zodiac sign (Capricorn, Libra etc)
With each person, we see a button with the title "find matches".

If we press that button:

the big list of people disappears
we see the person clicked on top
below we see a list of "matches" of that person
someone is not allowed to match himself
How do we determine a match? We do this based on zodiac signs. Whether people live in another continent, are 30 years old or don't speak each other's language is not important, love conquers all borders ;-)

How do we determine which zodiac sign someone is? Do that with this information.

And we only go for the "Great Match".
