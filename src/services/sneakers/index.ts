import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class SneakersService {

  static async All() {
    const result = await prisma.sneakers.findMany();
    return result
  }  

  static async Create(item: any) {
    const result = await prisma.sneakers.create({
      data: {
        model: item.model,
        price: item.price,
        image: item.image
      },
    });
  }

  static async Delete(item: any) {
    const result = await prisma.sneakers.delete({
      where: {
        model: item.model
      }
    });
  }
}
