import React from "react";
import { Card,Button } from "react-bootstrap";

function Category() {

const categoryData = [
    {
      "name": "Beverages",
      "key": "beverages",
      "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
      "enabled": true,
      "order": 3,
      "imageUrl": "/static/images/category/beverages.png",
      "id": "5b675e5e5936635728f9fc30"
    },
    {
      "name": "Bakery Cakes and Dairy",
      "key": "bakery-cakes-dairy",
      "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
      "enabled": true,
      "order": 2,
      "imageUrl": "/static/images/category/bakery.png",
      "id": "5b6899123d1a866534f516de"
    },
    {
      "name": "Beauty and Hygiene",
      "key": "beauty-hygiene",
      "description": "Buy beauty and personal care products online in India at best prices.",
      "enabled": true,
      "order": 4,
      "imageUrl": "/static/images/category/beauty.png",
      "id": "5b68994e3d1a866534f516df"
    },
    {
      "name": "Baby Care",
      "key": "baby",
      "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
      "enabled": true,
      "order": 5,
      "imageUrl": "/static/images/category/baby.png",
      "id": "5b6899683d1a866534f516e0"
    },
    {
      "name": "Seafood",
      "key": "seafood",
      "description": "Great place to buy fresh seafood.",
      "enabled": false,
      "order": -1,
      "id": "5b68997d3d1a866534f516e1"
    },
    {
      "name": "Fruits & Vegetables",
      "key": "fruit-and-veg",
      "description": "A variety of fresh fruits and vegetables.",
      "enabled": true,
      "order": 1,
      "imageUrl": "/static/images/category/fruits.png",
      "id": "5b6899953d1a866534f516e2"
    }
  ]

  return (
    <>
      {categoryData.map(
        (data) =>
          data.enabled && (
            <Card
              key={data.key}
              id="main"
            ><Card.Body className="app-category app-bottom-shadow">
              <img
                src={data.imageUrl}
                alt={data.name}
                width="300"
                height="185"
              ></img>
              <div className="category-description">
                <h4>
                  <b>{data.name}</b>
                </h4>
                <h6>{data.description}</h6>
                <Button variant="danger"><a style={{'color':'white'}} className="app-btn" href={`/product/${data.id}`}>
                  Explore {data.name}
                </a></Button>
              </div>
              </Card.Body>
            </Card>
          )
      )}
    </>
  );
}

export default React.memo(Category);