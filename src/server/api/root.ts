import { createTRPCRouter } from "~/server/api/trpc";
import { videoRouter } from "./routers/video";
import { VideoEngagementRouter } from "./routers/videoEngagement";
import { userRouter } from "./routers/user";
import { commentRouter } from "./routers/comment";
import { playlistRouter } from "./routers/playlist";
import { announcementRouter } from "./routers/announcement";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  video: videoRouter,
  videoEngagement: VideoEngagementRouter,
  user: userRouter,
  comment: commentRouter,
  playlist: playlistRouter,
  announcement: announcementRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
