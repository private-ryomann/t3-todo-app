import { todoRouter } from "~/server/api/routers/todo";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: todoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

// import { createTRPCRouter } from "~/server/api/trpc";

// import { exampleRouter } from "~/server/api/routers/example";

// // 定義したルータをサーバのプライマリルーターに渡す。
// const appRouter = createTRPCRouter({
//   example: exampleRouter,
// });

// // API の型定義をエクスポートする
// export type AppRouter = typeof appRouter;
