The tasks are:
1. Fetch product data from a (fake) API endpoint and display products in a grid
2. Create a "property" filter that shows the distinct properties found on all products. The user may select one or more properties and the grid will then only show items that match at least one of the selected props.
3. Create a min-max price filter where the user can select a minimum and maximum price. Only show items within that price range.
4. Create a dropdown above the grid that lets the user select a sorting order, either "by name" or "by price". Show items in the selected order. If no order is select, show the items in the same order as they appear in the JSON

Notes:
 - The product data can be fetched from `/api/products.json`
 - The layout for this product listing page can be found in the file [./docs/layout.png](./docs/layout.png)
 - You can assume that headline and text will be passed as props
 - The two webfonts' names are `Brown-Pro` and `Athelas` and they are already embedded via `fonts.css`
 - The header image is located at `/images/headerimage.jpg`
