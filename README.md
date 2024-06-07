
<!-- ABOUT THE PROJECT -->
## About The Project


This mini project with 2 pages,  
- List of FifaCards.
- FifaCards Detail page.


## Images 

  <img width="1440" alt="Screenshot 2024-05-30 at 10 45 29 AM" src="https://github.com/akpante3/fifa-cards/assets/37974813/52f6118b-e410-4ace-aebf-eb1b5e956a2d">
<img width="473" alt="Screenshot 2024-05-30 at 2 07 54 PM" src="https://github.com/akpante3/fifa-cards/assets/37974813/02fa45e1-1304-4f15-b05f-79c612eeea7e">

## Built with
- Nuxt 3
- Tailwind
- Sanity

## Getting Started

Follow these instructions to set up the project locally.

<!-- PREREQUISITES -->
## Prerequisites
* <a href="https://nodejs.org/en"> node</a>
* npm
  ```sh
  npm install npm@latest -g
  ```
<!-- INSTALLATION -->
## Installation

1. Clone this repo

2. Cd into the project directory
     ```sh
     cd fifa-cards
     ```
3. Install NPM packages
     ```sh
     npm install
     ```
4. Start project
     ```sh
     npm run dev
     ```
If you did everything right from Installation 👆🏾: The project should be available at http://localhost:3000/

<!-- TEST -->
## Test
Tools used for testing includes:

### Playwright:
- End-to-end (e2e) testing

* make sure your app is running at port http://localhost:3000/ before running the e2e test*
```sh
 npm run test:e2e
```
    
### Vitest: 
- Unit testing

```sh
 npm run test:unit
```
## Packages
- [Playwright](https://playwright.dev/)
- [Vitest](https://vitest.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Vue-Utils](https://test-utils.vuejs.org/)
- [Docker](https://www.docker.com/)

<!-- ROADMAP -->
## Roadmap

- [x] UI Implementation:
     - Design created on  [Figma](https://www.figma.com/file/s7kImUBIReGwNOfhtkqSNs/GDM-hiring?node-id=0%3A1)
     - Implemented pages and Components
     - Used the Manrope (variable) font family throughout the project
     - Utilized SCSS, BEM and Tailwind CSS
     - Ensured responsiveness across mobile and desktop devices, with keyboard accessibility (Tab, Tab + Shift to move focus in table)
       
- [x] API Implementation:
    - Pulled data from  [sanity studio](https://www.sanity.io/)
    - Implemented with Nuxt server-side rendering
      
- [x] Testing:
    - Conducted unit and end-to-end (e2e) testing

- [x] Deployment:
    - Used GitHub Actions to test, build, and deploy
    - Deployed with Docker
    - Hosted on <a href="https://fly.io/"> Fly.io</a>
    - Access the live application <a href="https://fifa-cards.fly.dev">here</a>


      
## Pending TODO

- Pagination
- Sorting
- make the menu bar functional

<p align="right">(<a href="#readme-top">back to top</a>)</p>

