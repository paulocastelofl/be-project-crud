-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "typeUserId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeUser" (
    "id" SERIAL NOT NULL,
    "description" TEXT,

    CONSTRAINT "TypeUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_typeUserId_fkey" FOREIGN KEY ("typeUserId") REFERENCES "TypeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
