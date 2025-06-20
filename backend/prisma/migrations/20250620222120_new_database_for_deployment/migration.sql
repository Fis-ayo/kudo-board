-- CreateTable
CREATE TABLE "Board" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author" TEXT,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "GIF_URL" TEXT NOT NULL,
    "owner" TEXT DEFAULT 'Anonymous',
    "boardId" INTEGER NOT NULL,
    "vote_count" INTEGER NOT NULL DEFAULT 0,
    "pinned" BOOLEAN DEFAULT false,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "author" TEXT,
    "text" TEXT NOT NULL,
    "cardId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
