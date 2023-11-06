import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class SneakersService {
  static async All() {
    const result = await prisma.product.findMany();
    return result;
  }

  static async Create(item: any) {
    const result = await prisma.product.create({
      data: {
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image,
      },
    });
  }

  static async Delete(item: any) {
    const result = await prisma.product.delete({
      where: {
        id: item.id, // как достать id, посмотреть
        name: item.name,
      },
    });
  }
}
