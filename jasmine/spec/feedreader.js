//Don't run tests until DOM is ready. 
$(function() {
    /* This suite is all about RSS feeds
    * definitions/the allFeeds variable in our application. */
    describe('RSS Feeds', function() {
        /* Look at alLFeeds array:
         * Expects allFeeds has been defined.
         * Expects that allFeeds is not empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Look at each feed in allFeeds array:
         * Expects it has a URL defined.
         * Expects that the URL is not empty.*/
         it('url defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBeFalsy();
            }
         });


        /* Look at each feed in allFeeds array:
         * Expects it has a name defined.
         * Expects that the name is not empty.*/
         it('name defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeFalsy();
            }
         });

    });


    // Test suite for the expanding/collapsing menu.
    describe('The menu', function() {
        //Variables body and menu to be used by tests:
        const body = document.querySelector('body');
        const menu = document.querySelector('.menu-icon-link');

        /* Look at menu:
         * Expects menu element is hidden by default. */
         it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
         });

         /* Menu changes visibility when the menu icon is clicked:
          * Expects menu display when clicked.
          * Expects menu hides when clicked again. */
          it('changes visibility', function() {
            menu.click(); // Simulate click on menu icon.
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
          });

    });


    // Aysnc test suite to check there is an element when feed is loaded.
    describe('Initial entries', function() {
         //beforeEach function runs first!
         beforeEach(function(done) {
        //Use callback parameter with "done" to ensure feed is loaded.
            loadFeed(0, done);
         });

         /* Ensure at least one .entry element exists within .feed container: 
         * Expects more than 0 items in the feed. */
         it('an element exists', function() {
            const feedEntry = document.querySelectorAll('.feed .entry');
            expect(feedEntry.length).toBeGreaterThan(0);
         });

    });


    /* Async test suite for new feed selection from menu. */
    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        let initialFeed = '';
        let nextFeed = '';
        //To check that content changes, must access loadFeed initially and again once clicked.
        beforeEach(function(done) {
            loadFeed(0); // Load Udacity feed.
            initialFeed = feed.children[0].innerText;
            loadFeed(1, done); // Load CSS Tricks feed.
         });
        /* Compare the two feeds (feed entries before next loaded, and after:
        * Expects that the the feed content changes. */
        it('content changed', function() {
            nextFeed = feed.children[0].innerText;
            expect(initialFeed != nextFeed).toBe(true);
        });

    });

}());
