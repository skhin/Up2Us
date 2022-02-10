# Up2Us

An app that helps solve the most annoying question of all time - WHAT DO YOU WANT TO EAT???
--
Background -
--

Have you ever gone out with your partner, your family, your friends and when its time to decide on a place to eat, everyone goes,
"Anything. Up to You."
--

Relationships have been strained ....
Friendships have been broken.....
Lives torn to tatters .....

But what if there was something that can help you take that stress away.
Up2Us helps solve one of the worlds greatest problems all with just a few questions.

---

## TECHNOLOGIES USED

FRONT END: HTML, CSS, JAVASCRIPT, REACT
UI FRAMEWORK: ANTD

BACKEND: MONGODB, EXPRESS, NODEJS, NONSQL

---

## THE JOURNEY

For my capstone project for my Software Engineering Immersive course, I decided to undertake building the app that I had always wanted to build.
From the first day that I joined this course, I knew that this would be my final course project, and I am glad that I was able to use the technologies learnt during the entire 3 mth bootcamp.

I started with building the backend first, setting up my initial databases, models, routes, validators before working on the front end.
For the frontend, I chose to work with ANTD as I wanted to try a new design framework, other than the Bootstrap which I was accustomed to.

## BACKEND

I had 3 major categories to build for my backend to ensure my frontend was working.

1. Authentication - to authenticate users whilst registering, logging in and logging out

<img width="982" alt="Screenshot 2022-02-10 at 1 06 42 PM" src="https://user-images.githubusercontent.com/88125976/153341103-f95a92f0-4b81-4e7c-b9c4-94aa773e020a.png">

<img width="745" alt="Screenshot 2022-02-10 at 1 07 03 PM" src="https://user-images.githubusercontent.com/88125976/153341143-1e6c87ab-1392-44ca-8af4-b9387f2980b8.png">

<img width="628" alt="Screenshot 2022-02-10 at 1 09 53 PM" src="https://user-images.githubusercontent.com/88125976/153341452-278c84b6-80b1-4238-92a7-2c757a5517a0.png">

<img width="761" alt="Screenshot 2022-02-10 at 1 10 13 PM" src="https://user-images.githubusercontent.com/88125976/153341479-2f9d5034-0a89-4673-b585-984793c68aab.png">

2. User Settings - this will store all the user data from their fav/non-fav cuisines, dietary restrictions, visited locations, etc

<img width="612" alt="Screenshot 2022-02-10 at 1 12 07 PM" src="https://user-images.githubusercontent.com/88125976/153341680-4434717d-29f9-44e1-887a-1a9788c1554a.png">
(Unfortunately it is too long to screenshot, so the pic above shows how it would be used to fetch from the backend to frontend)

3. Restaurant Settings - this will store all the restaurants data and aid in the filtering process during the front end call.

<img width="788" alt="Screenshot 2022-02-10 at 1 13 51 PM" src="https://user-images.githubusercontent.com/88125976/153341871-35f0cc61-f2e3-4001-af2d-a2d23d0ffdbb.png">


## FRONTEND

Several components and pages were built to ensure that the users will get the full experience. Again it targeted the 3 main categories of Authentication, User Settings and Meal Settings.

Majority of the paths would be placed in a protected/private route/path as the sign-ins would need to be validated before the users are allowed to continue

<img width="678" alt="Screenshot 2022-02-10 at 1 15 49 PM" src="https://user-images.githubusercontent.com/88125976/153342099-4d8786f3-40f3-4ace-b395-bc42ab15488c.png">
<img width="494" alt="Screenshot 2022-02-10 at 1 16 07 PM" src="https://user-images.githubusercontent.com/88125976/153342138-ddf5a515-15ac-4d09-9059-ba941fa474ae.png">

---

Some screenshots of the page for initial submission - though it wont be the final due to the time constraints.

## HOMEPAGE

<img width="1361" alt="Screenshot 2022-02-07 at 7 31 52 PM" src="https://user-images.githubusercontent.com/88125976/152780331-9fa8c9d5-adc7-4ad6-a3b8-d9aef5206e40.png">

## USER PROFILE PAGE

<img width="1337" alt="Screenshot 2022-02-07 at 7 33 38 PM" src="https://user-images.githubusercontent.com/88125976/152780609-d4ed3eda-e704-4e6c-974b-46f918a1272b.png">

## MEAL PREFERENCES

<img width="1341" alt="Screenshot 2022-02-07 at 7 34 39 PM" src="https://user-images.githubusercontent.com/88125976/152780723-0ed128f1-bfac-46b3-b023-4b175184d5cb.png">

---

## IN THE FUTURE

In the future, I would like to add these additional features:

- More responsive design to fit any screen
- Improve on layout quality and design
- More refinement of the filters when more data is entered
- Cleaner codes
- Try out recreating the app using a different programming language for both front and back end
- Additional features such as linking with connections (others who are using the same app, so that their info will be collated to provide a refined restaurant result)
- Cashback/Vouchers - for taking it into the real world, this would allow users to receive cashback, vouchers, rewards, discounts for using the app
