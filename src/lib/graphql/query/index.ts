import { gql } from '../../gql'

export const AllCategoriesByCompanyOnlyVisible = gql(`
query AllCategoriesByCompanyOnlyVisible($companyId: Int!) {
  allCategoriesByCompanyOnlyVisible(companyId: $companyId) {
    id
    name
    linkImageCategory {
      link
    }
  }
}
`)

export const AllProductsByCompanyOnlyVisible = gql(`
query AllProductsByCompanyOnlyVisible($companyId: Int!) {
  allProductsByCompanyOnlyVisible(companyId: $companyId) {
name
    SKU
    UPC
    id
    image {
      link
      id
    }
    price {
      unitPrice
      onSale
      visible
      currency {
        abbreviation
        name
      }
      id
      bulkQuantity
      bulkPrice
    }
  }
}`)

export const GetProductByIdAndCompanyId = gql(`
query GetProductByIdAndCompanyId($id: Int!, $companyId: Int!) {
  getProductByIdAndCompanyId(id: $id, companyId: $companyId) {
    SKU
    UPC
    category {
      name
    }
    contentProduct {
      content
      id
      typeContentProduct {
        name
      }
    }
    id
    image {
      link
    }
    name
    price {
      currency {
        abbreviation
      }
      bulkPrice
      bulkQuantity
      onSale
      unitPrice
      visible
    }
  }
}
`)
