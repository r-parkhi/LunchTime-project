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
      prod_calcium
      prod_potassium
      prod_calories
      prod_carbs
      prod_cholesterol
      prod_dietary_fiber
      prod_gram_weight
      prod_iron
      prod_mfg
      prod_protein
      prod_sat_fat
      prod_sodium
      prod_total_fat
      prod_trans_fat
      prod_vita_iu
      prod_vita_re
      prod_vitc
      prod_vitd
      sugar
      added_sugar
    }
  }
`