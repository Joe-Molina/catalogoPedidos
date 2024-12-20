import { prisma } from '../../utils/prisma'
import { Product } from './types'



export class ProductModel {
  static async getProducts() {
    const products = await prisma.product.findMany({
      include: {
        category: true
      }
    })
    return products
  }

  static async getProductsByCategory(categoryId: number) {
    const products = await prisma.product.findMany({
      where: {
        categoryId: Number(categoryId)
      },
      include: {
        category: true
      }
    })
    return products
  }


  static async getProductByIdModel(id: number) {
    const product: Product | null = await prisma.product.findFirst({
      where: {
        id: Number(id)
      },
      include: {
        category: true
      }
    })
    return product
  }

  static async updateProductByIdModel(id: number, data: any) {
    const product: Product | null = await prisma.product.update({
      where: {
        id: Number(id)
      },
      data
    })
    return product
  }

  static async createProduct({ name, price, photo, description, categoryId }: Product) {

    const newProduct = await prisma.product.create({
      data: {
        name,
        price: Number(price),
        photo,
        description,
        categoryId: Number(categoryId)
      }
    })
    return newProduct
  }

  static async createCategory(name: string) {

    const newCategory = await prisma.category.create({
      data: {
        name
      }
    })
    return newCategory
  }

  static async deleteCategory(id: number) {

    const deletedCategory = await prisma.category.delete({
      where: {
        id: Number(id)
      }
    })
    return deletedCategory
  }

  static async deleteProduct(id: number) {

    const deletedProduct = await prisma.product.delete({
      where: {
        id: Number(id)
      }
    })
    return deletedProduct
  }

  static async getCategorys() {

    const Categorys = await prisma.category.findMany()

    return Categorys
  }

}