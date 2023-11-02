import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class SneakersService {

  static async All() {
    const result = await prisma.product.findMany();
    return result
  }  

  static async Create(item: any) {
    const result = await prisma.product.create({
      data: {
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description
      },
    });
  }

  static async Delete(item: any) {
    const result = await prisma.product.delete({
      where: {
        name: item.name
      }
    });
  }
}
