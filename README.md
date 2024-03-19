# Hermes Digital Front-end Technical Test

The goal of this exercise is to work together in pair/mob programing mode. 
It is not important for you to reach the end of this exercise, but to get to know each other.

## Links :

- [API to use for this exercise](https://jsonplaceholder.typicode.com/)
- [React component library used for this exercise](https://react-bootstrap.github.io)

---

## Before starting:

- Fork this repository into your GitLab account.
- Clone the repository locally on your machine.
- Setup the project by installing all the necessary tools and/or dependencies.

### If you are using VScode

Please make sure to have the [live share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) extension already installed.

## Step 1

Follow this design:

- Use [react-bootstrap Button](https://react-bootstrap.github.io/docs/components/buttons) for the head button.
- Use [react-bootstrap Grid](https://react-bootstrap.github.io/docs/layout/grid) to create a 3 columns grid. (Can be done using vanilla CSS, optional).
- Use [react-bootstrap ListGroup](https://react-bootstrap.github.io/docs/components/list-group) to create a placeholder.

[![Image 1](/docs/screen_step_1.PNG?raw=true)](/docs/screen_step_1.PNG?raw=true)

---

## Step 2

- On click on the button, load [users](https://jsonplaceholder.typicode.com/users) and [albums](https://jsonplaceholder.typicode.com/albums) data.
- Once data is loaded, change the button state (as shown in the design).
- Use [react-bootstrap ListGroup](https://react-bootstrap.github.io/docs/components/list-group) to create a component to display users data.
  - For each user, list their albums.
  - Add "see" button.

[![Image 2](/docs/screen_step_2.PNG?raw=true)](/docs/screen_step_2.PNG?raw=true)

---

## Step 3

- On click on an album button (See), load the first photo using [photos api](https://jsonplaceholder.typicode.com/albums/1/photos)
  - Create Photo interface
- Use [react-bootstrap Modal](https://react-bootstrap.github.io/docs/components/modal)
- The modal should display:
  - The title of the photo.
  - The picture of the album.
  - The title of the album.

[![Image 3](/docs/screen_step_3.PNG?raw=true)](/docs/screen_step_3.PNG?raw=true)
