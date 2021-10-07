# You Got Options: Decision Maker App

Live Link: https://you-got-options.surge.sh/ 

**Purpose of the app:** <br/>
<br/>Sometimes you are faced with making a decision between multiple options and you need to mull it over to decide which choice is the most optimal.  You Got Options is an app that provides users with the ability to weigh all their options and visually compare all factors involved using a point system.  You Got Options can be used to help users think through any decision, large are small. <br/>
<br/>**App Features:**<br/><br/>

A user is able to securely register and log in to the app.  Once inside the app, the user will be sent directly to the Add a Decision page where they can add a new decision.  If the user would prefer to view an existing decision, they have the ability to access their list of decisions through clicking the My Decisions menu option in the navbar.  Once the user clicks on an existing decision, they will be taken to the decision details page where they will see all options and factors that pertain to that decision.  Users also have the ability to delete a decision from the My Decisions page. 
Should a user wish to add a new decision, they can input the decision title and submit it.  They will then be taken to the Add an Option page where they will input the option title and an image url to provide a visual representation of their option.  Upon submitting their option, the user is taken to the Add Factors page where they have the ability to add multiple factors.  The user will add the factor description, if it is a pro or a con, and choose the point value (positive for pros, negative for cons) that they feel matches the factor.  Once finished submitting their factors, the user can click the Go to Decision Details Page button.  This page (mentioned above) displays the decision, with all of its options.  Each decision’s option includes the option image, the total points compiled from the factors, and each factor is listed within the option box.  On the decision details page a user has the ability to add or delete both an option, or a factor. 
-	Secure login
-	Database featuring 3 levels of a nested hierarchy of decisions, options, and factors
-	Ability to add an image to represent each option
-	Ability to assign a point value to each factor pertaining to an option
-	Tallied total option points
-	A visual display of multiple options and their factors for a decision
-	Ability to add or delete additional options/factors from the decision details page
-	Intuitive app flow<br/>

**Database:** PostgresSQL 
**Programs:** JavaScript (Node.js & Express,), Sequelize, React, Redux, HTML, CSS, React Bootstrap


**Site Preview:**
![YGO-home-page](https://user-images.githubusercontent.com/68575526/136036599-602b92b4-4143-4e87-b2d6-7c5dffaf8799.png)
![decisionListPage](https://user-images.githubusercontent.com/68575526/136036726-9e3f1490-6633-4198-aee4-c3134a0d0f20.png)
![detailsPage](https://user-images.githubusercontent.com/68575526/136036838-e85d9382-864f-4fbb-bf29-2e502230b21b.png)
![responsiveHome](https://user-images.githubusercontent.com/68575526/136201828-47d184b0-69ea-4106-978f-4503aacb8427.png)
![responsiveDecisionList](https://user-images.githubusercontent.com/68575526/136200900-01ccec9f-6d52-40a4-8f93-854fd76735ff.png)
![responsiveDectails2](https://user-images.githubusercontent.com/68575526/136200579-7c7824bd-00f6-41b0-8a59-04d8bc1b72dc.png)

