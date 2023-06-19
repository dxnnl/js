-- CreateTable
CREATE TABLE "materia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "profesor" TEXT,
    "email" TEXT,

    CONSTRAINT "materia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "materia_email_key" ON "materia"("email");
