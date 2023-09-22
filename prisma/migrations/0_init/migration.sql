-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fighter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "fighter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moveset" (
    "id" SERIAL NOT NULL,
    "physicalatks" TEXT NOT NULL,
    "rangedatks" TEXT NOT NULL,
    "specialatks" TEXT NOT NULL,
    "superatks" TEXT NOT NULL,
    "ultimateatk" TEXT NOT NULL,
    "fighterId" INTEGER NOT NULL,

    CONSTRAINT "moveset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "fighter" ADD CONSTRAINT "fighter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moveset" ADD CONSTRAINT "moveset_fighterId_fkey" FOREIGN KEY ("fighterId") REFERENCES "fighter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

