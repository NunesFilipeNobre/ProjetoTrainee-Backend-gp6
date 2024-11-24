-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Avaliacoes_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacoes" ("conteudo", "createdAt", "id", "updatedAt", "userID") SELECT "conteudo", "createdAt", "id", "updatedAt", "userID" FROM "Avaliacoes";
DROP TABLE "Avaliacoes";
ALTER TABLE "new_Avaliacoes" RENAME TO "Avaliacoes";
CREATE TABLE "new_Comentarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "avaliacaoID" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Comentarios_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Comentarios_avaliacaoID_fkey" FOREIGN KEY ("avaliacaoID") REFERENCES "Avaliacoes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comentarios" ("avaliacaoID", "conteudo", "createdAt", "id", "updatedAt", "userID") SELECT "avaliacaoID", "conteudo", "createdAt", "id", "updatedAt", "userID" FROM "Comentarios";
DROP TABLE "Comentarios";
ALTER TABLE "new_Comentarios" RENAME TO "Comentarios";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
