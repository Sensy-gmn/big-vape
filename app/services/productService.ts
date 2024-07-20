import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async () => {
  try {
    return await prisma.product.findMany();
  } finally {
    await prisma.$disconnect(); // Ferme la connexion après utilisation
  }
};

export const getProductById = async (id: number) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return product;
};

export const getCategoryNameByProductCategoryId = async (id: number) => {
  const category = await prisma.category.findUnique({
    where: { id },
    select: { name: true },
  });
  return category?.name;
};
