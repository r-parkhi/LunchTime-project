import { gql } from "@apollo/client";

export const GET_CURRENT_MONTH_MENU = gql`
  query GetCurrentMonthMenu {
    menuType(id: "648bac4ee96f1ead68a2e791") {
    defaultPublishedMonth {
      items {
        day
        product {
          id
          name
          rating_average
          rating_count
          prod_allergens
          long_description
          category
        }
      }
    }
  }
  }
`

export const GET_PRODUCT = gql`
  query GetProduct($id: String!) {
    product(id: $id) {
      id
      name
      rating_average
      rating_count
      prod_allergens
      long_description
      category
    }
  }
`