# About

This is the Feed Reader Testing project from the Udacity Frontend Web Developer Nanodegree. The starter code belongs to Udacity. Test suites were written by me. 


# How to Run

Download or clone the GitHub repository [using this link](https://github.com/MarcusEstr/frontend-nanodegree-feedreader). Then open the `index.html` file. The page will load - scroll to the bottom to review the Jasmine tests for success and/or failure. 

Or, you can simply view it hosted in the browser without needing to download anything. [Click here for the GitHub-hosted link](https://marcusestr.github.io/frontend-nanodegree-feedreader/). Please note that this option will require you to "Load unsafe scripts" (the Google Feed API) or none of the feed entries will appear on screen. 


# Test Suites
RSS Feeds:
* "are defined" - Tests that the allFeeds array is defined and not empty. 
* "url defined" - Tests that allFeeds array URLs are defined and not empty. 
* "name defined" - Tests that allFeeds array names are defined and not empty.

The menu:
* "is hidden by default" - Tests that the menu is hidden by default. 
* "changes visibility" - Tests that the menu changes from hidden to visible and so forth when icon clicked.

Initial entries:
* "an element exists" - Tests that feed has at least one entry element after API loads.

New Feed Selection: 
* "content changed" - Tests that feed entry is actually changed when another feed is selected.


# References

* [Udacity - Rethinking Testing and Writing Test Suites courses](https://eu.udacity.com/course/javascript-testing--ud549)
* [MDN - Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
* [MDN - For... of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
* [Jasmine - Asynchronous work](https://jasmine.github.io/tutorials/async)