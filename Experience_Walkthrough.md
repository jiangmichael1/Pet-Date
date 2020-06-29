# User Experience Walk-through

 ## Home Page
 - When the user first visits the website, they are directed to home page with a sample of the animal database loaded and their pictures displayed next to the log-in or register button.
 - If the user is not signed in, the navBar will display:
    - Sign Up
    - Find A Date (redirects to sign up, displays: "You need to sign up to see the pets in your area!")
    - Pet Dates (redirects to sign up, displays: "We can't show the pets you matched with if you don't have an account!" )
    - Contact Us 
    - Log In
 - Add additional condition check for if someone is logging in as an adoption center

*** 
 
 ## Sign Up 
 - When the user clicks "Sign Up", they will be redirected to a sign up form which will make a fetch request ("POST") for the user upon clicking submit.
 - They will be redirected to their "Find A Date" page after clicking submit.
    - The navBar will also change accordingly 
        - Sign Up -> My Profile
        - Contact Us -> My Messages
        - Log In -> Log Out
    

***

 ## Find A Date (Main Interface)
 - Upon logging in, MainContainer will fetch the entire likedPets table (for now)
    - if the likedPet's user_id matches the current user's id
        - this.setState({ likedPets: currentUsersLikedPets })
 - MainContainer will have a state that holds all the pets in the fetch to the PetAPI (fake data for now)
 - Only render the pets that are not a part of the currentUsersLikedPets
    - Filter the pets based on if they are a part of the currentUsersLikedPets array (filteredPets).
    - this.setState({ filteredPets: filteredPets })
 - MainContainer will pass down the filteredPets state as a prop to PetContainer and Pet
    - PetContainer will then render each pet
 - On component mount, the Pet will send a "POST" request to add this pet to the user's likedPets

 ### Clicking on Like or Dislike
 - When a user clicks on the "Like/Dislike" button:
    - A "PATCH" request is sent to change the current likedPet join entry's :like attribute to "Liked/Disliked"
    - Add the pet object to the user's likedPet's array. 
        - Get the current likedPet state, make a duplicate using the [...] spread operator
        - Add the pet to the end of that array
        - set the likedPet state to the new likedPet array
    #### Stretch Goals
    - A card tile will display the pet's photo's and scroll through them infinitely
    - The pet's info will be on the right side of the pet photo
    - The user can press 'left' or 'right' keys to like or dislike the photo
    - There will be an animation that slides the image to the left or right side. 

 ### Adoption Center View
 ### Clicking On Contact Us/My Messages (Adding in Messenger Feature)
 ### Utilizing API for Back-end Data (Adding in API)
   - Figure out how to make curl requests


