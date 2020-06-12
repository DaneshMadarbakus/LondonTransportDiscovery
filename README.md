#Final thoughts

With further time on this project, I would make the code more Dry by refacotring how i communicate through components that a line is disrupted, as I have repeated the same function on menu.js and main.js to check if a line in disrupted.

I would also make the design mobile responsive. 



Questions for Ermes
How should/can I start to divide presentational components? 
Am I overengineering components? (Over refactoring?)
How much styling should be in the component and how much in a seperate styles file

# plan

- refactor folder structure
- improve composition and reusability
- explore hooks
- push react until redux makes sense
- introduce redux
- introduce redux thunk
- push redux thunk until redux saga makes sense
- introduce redux saga
- introduce rxjs as alternative of redux saga

optional:
- state machines for ui
- explore benefits of react storybook
- explore benefits of typescript
- explore graphql as middle layer
- explore different css-in-js libraries
- CSS framework like Tailwind
- explore react-testing-library
- explore react frameworks like nextjs or gatsby
- add CI


# todo composition and reusability
- create Box component to be used both in the menu and in the detail section
- create List and Devider components to be used both in the menu and in the detail section
- refactor Indicators as Badge to be able to support different sizes, colors and images
