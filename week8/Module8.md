# Module 8
## Styles and Boostraps

In Module 8: Styles and Bootstrap, you will learn about the building blocks of CSS and the best ways to organize your CSS, HTML, and JavaScript code as you build web pages. You’ll familiarize yourself with the functionality of Bootstrap, a popular styles framework. Finally, you’ll use JavaScript to apply styles programmatically to create dynamic web pages.

### Course Learning Outcomes Addressed
* Explain the key web programming concepts
* Build web applications using JavaScript, HTML, and CSS
* Design and code user interactions on web pages
* Design and implement UI components for web applications

## CSS Selectors
For the guide, click [here](https://www.theodinproject.com/lessons/foundations-intro-to-css).

## CSS Grid
For CSS grid example, check `grid.html`.

### Setting up a grid
* **Grid container**
We can think about CSS Grid in terms of a container and items. Simply put, when you make an element a grid container, it will “contain” the whole grid. In CSS, an element is turned into a grid container with the property ``display: grid or display: inline-grid``.

In this example, the parent element marked ``class="container"`` becomes a grid container and each of the direct child elements below it automatically become grid items. What’s easy about CSS Grid is that you don’t have to assign each child element a property.

Note that only the direct child elements will become grid items here. If we had another element as a child under one of these child elements it would not be a grid item. In the example below, the paragraph element is not a grid item:

``
<!-- index.html -->
<div class="container">
  <div>Item 1</div>
  <div>Item 2
    <p>I am not a grid item!</p>
  </div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
``

You could make grids inside of grids if you wanted.

* **Lines and tracks in grids, oh my!**
Since you’re coding along with our example (right?) you will notice it doesn’t look very grid-ish yet. A lot of resources on CSS Grid like to show you boxes and outlined grid tables right from the start. But if your grid container and grid items don’t have any borders you won’t actually see these lines on the page. So don’t worry, they’re still there!

If you inspect these elements on a webpage using developer tools, you will notice grid badges on the grid elements in the code. The Layout options of the dev tools allows you to select an overlay that can show these invisible lines, tracks and areas of the grid. You will read about using a browser’s developer tools in the assignment below and learn more about lines, tracks, and areas in the next lesson.

* **Columns and rows**
Now that we have our grid container with several grid items all set up, it’s time to specify our columns and rows. This will define the grid track (the space between lines on a grid). So we could set a column track to give us space between our columns and a row track to give us space between our rows. We will get into the specifics on tracks and lines in the next lesson, but for now let’s just make some columns and rows.

The properties ``grid-template-columns`` and ``grid-template-rows`` make defining column and row tracks easy.

Going back to our grid container from above, let’s define two columns and two rows to place our four grid items.

If we want to add more columns or rows to our grid, we can simply define these values to make another track.

CSS Grid also includes a shorthand property for defining rows and columns. In our previous example we can replace the properties for ``grid-template-rows`` and ``grid-template-columns`` with the shorthand grid-template property. Here we can define our rows and columns all at once. For this property, rows are defined before the slash and columns are defined after the slash. Let’s keep the same column and row values, but use the shorthand property instead:
``
/* styles.css */

.container {
  display: grid;
  grid-template: 50px 50px / 50px 50px 50px;
}
``
Columns and rows don’t have to share all the same values either.

* **Explicit vs implicit grid**
Let’s go back to our original example of a simple 2x2 layout for four grid items. What happens if we add a fifth item to our container without changing our grid-template-columns or grid-template-rows properties?

You’ll notice our fifth item was placed on the grid and it’s been slotted into a third row we did not define. This is because of the implicit grid concept and it’s how CSS Grid is able to automatically place grid items when we haven’t explicitly defined the layout for them.

When we use the grid-template-columns and grid-template-rows properties, we are explicitly defining grid tracks to lay out our grid items. But when the grid needs more tracks for extra content, it will implicitly define new grid tracks. Additionally, the size values established from our grid-template-columns or grid-template-rows properties are not carried over into these implicit grid tracks. But we can define values for the implicit grid tracks.

We can set the implicit grid track sizes using the grid-auto-rows and grid-auto-columns properties. In this way we can ensure any new tracks the implicit grid makes for extra content are set at values that we defined.

Let’s say we want any new rows to stay the same value as our explicit row track sizes:
``
/* styles.css */

.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
  grid-auto-rows: 50px;
}
``
By default, CSS Grid will add additional content with implicit rows. This means the extra elements would keep being added further down the grid in a vertical fashion. It would be much less common to want extra content added horizontally along the grid, but that can be set using the grid-auto-flow: column property and those implicit track sizes can be defined with the grid-auto-columns property.

* **Gap**
The gap between grid rows and columns is known as the gutter or alley. Gap sizes can be adjusted separately for rows and columns using the column-gap and row-gap properties. Furthermore, we can use a shorthand property called gap to set both row-gap and column-gap.

* **Wrapping up our first grid**
Now that you’ve made a grid you can start to see how easy it is to control the layout of your elements with CSS Grid. You may also realize how CSS Grid can solve common layout problems. In the next couple lessons we will cover positioning elements and advanced grid attributes. But first, check out the links below that cover making the basics of a grid in more detail.

[Advanced Grid Properties](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-grid-properties)

## CSS Holy Grail

![Holy Grail](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HolyGrail.svg/220px-HolyGrail.svg.png)

## Bootstrap
Boostrap is much easier to work with once you know how CSS works. For details, check [here](https://getbootstrap.com/).

## Font Basics
Check out CSS Font properties [here](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-text-styles).

## Applying Styles Programatically

