-- CreateTable
CREATE TABLE "Sneakers" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Sneakers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sneakers_model_key" ON "Sneakers"("model");
