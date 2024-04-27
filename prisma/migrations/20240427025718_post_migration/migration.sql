-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "mediaUrl" TEXT,
    "scheduleDate" DATETIME,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" DATETIME
);
INSERT INTO "new_Post" ("id", "title") SELECT "id", "title" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
