-- CreateTable
CREATE TABLE "estudiante" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "pais" TEXT,
    "email" TEXT,

    CONSTRAINT "estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "estudiante_email_key" ON "estudiante"("email");
