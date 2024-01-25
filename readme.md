# Introduction

You know the basics of working with objects and arrays. As you program more and more you will encounter more and more complex  
"data structures". A data structure is a fancy word for a variable that contains several things (such as an array or object).  
For example, APIs can regularly give complex results. You should be able to pick the right things from a big amount of data.  
You will be working with that kind of data for this exercise. To do this, use the data from the JavaScript file in the  
GitHub repository below: https://github.com/WincAcademy/randomPersonData  
git clone this repository in a new folder.  

This exercise consists of 6 sub-exercises that increase in complexity. Choose a number of sub-questions that you like to make.  
Each sub-exercise has a number of points. Make sure you make sub exercises that total at least 4 points.  
Don't dwell too long on this exercise, it is a very big exercise. Maybe you can come back to this later for a replay!  
Create an HTML page with buttons.  

Each subcommand gets its own button with the name of the subcommand. For example,  
the button for the first subcommand is named "Country List".  
When you click on a button, the previous results disappear and you see the results of the clicked sub-command.  
Write small functions that you can reuse.

# Sub-exercise: country list - 1 point  
List all countries, sorted by country name.

# Sub exercise: Capricorn women - 3 points
Make a list of people:
1. show their first and last name and photo
2. sort the list by their first name
3. every person on that list must
    - be a woman
    - be older than 30 (1990 or older)
    - be a Capricorn (birthday from December 22 to January 19)

# Sub-exercise: old credit cards - 4 points
Some people's credit card is about to expire, we're going to call them to warn them.  
Make a list of people:
1. show the following data per person
    - first name Last Name
    - phone number
    - credit card number
    - expiration date
2. The list should contain adults only.
3. The expiration date must be in the future (this year).
4. The expiration date must be within the next year.
5. Sort the list so that the fastest expiring credit cards are at the top.
6. Read here about how to get the current date. Your script should also work properly in 2 months.


# Sub-question: most people - 3 points
List all countries that appear in the data.  
Behind each country should be stated how many of the people in the list live in that country.  
The list should be sorted so that the countries with the most people are at the top.  


# Sub exercise: average age - 5 points
OK, this one is a bit more complex.  
When we press the button for this command, a list of buttons appears. The command buttons also remain.  
Each of the new buttons has a country name ("Netherlands" for example).  

If we then press one of the country buttons, we see a sentence appear somewhere on the page with the text  
"The average person in {country} is {years} old".  

To show that sentence we need to calculate the average age for that country.  
Round the mean age to whole numbers (18.4999 → 18 and 18.5 → 19).


# Sub-exercise: matchmaking - 6 points  
This exercise is the hardest.  
When we press the button for this command, we see a list of all people:
1. the list is sorted by first name
2. we only want to see adults
3. of each person we see:
    - first name Last Name
    - photo
    - country
    - age
    - zodiac sign (Capricorn, Libra etc)  
  
With each person, we see a button with the title "find matches".  
If we press that button:  
1. the big list of people disappears
2. we see the person clicked on top
3. below we see a list of "matches" of that person
4. someone is not allowed to match himself

How do we determine a match? We do this based on zodiac signs. Whether people live in another continent,  
are 30 years old or don't speak each other's language is not important, love conquers all borders.  

How do we determine which zodiac sign someone is? Do that with this information.  
You may come up with your own list of good matches for each sign, or you could use a list from the internet. 


