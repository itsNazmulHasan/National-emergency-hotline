1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


Answer:
getElementById selects a single element by its unique ID. getElementsByClassName selects multiple elements by class name and returns a live collection. querySelector finds the first match using CSS selectors, while querySelectorAll finds all matches and returns a static list.

2. How do you create and insert a new element into the DOM?


Answer:
You create a new element using document.createElement and insert it into the DOM using methods like appendChild or insertBefore on a parent element.

3. What is Event Bubbling and how does it work?


Answer:
Event Bubbling is when an event on a child element moves up through its parent elements in the DOM, triggering handlers along the way. It starts at the target and goes up to the root.

4. What is Event Delegation in JavaScript? Why is it useful?


Answer:
Event Delegation attaches a single event listener to a parent element to handle events on its children using bubbling. It’s useful for better performance, handling dynamic content, and reducing code complexity.

5. What is the difference between preventDefault() and stopPropagation() methods?


Answer:
preventDefault() stops the default action of an event, like form submission. stopPropagation() stops the event from traveling up or down the DOM, but doesn’t affect the default action.