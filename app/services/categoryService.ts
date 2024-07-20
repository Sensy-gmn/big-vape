import prisma from "@/app/api/prisma/client";

export const getCategories = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};

export const getCategoryNameByProductCategoryId = async (id: number) => {
  const category = await prisma.category.findUnique({
    where: { id },
    select: { name: true },
  });
  return category?.name; // Return only the name
};
