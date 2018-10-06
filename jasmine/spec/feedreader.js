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


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });

}());
