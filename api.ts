import { Router } from "https://deno.land/x/oak@v6.0.1/mod.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = `
          ___
    |     | |
   / \\    | |
  |--o|===|-|
  |---|   |d|
 /     \\  |w|
| U     | |b|
| S     |=| |
| A     | | |
|_______| |_|
 |@| |@|  | |
__________|_|_

------------------------------------------------
Thank you for visiting https://asciiart.website/
This ASCII pic can be found at
https://asciiart.website/index.php?art=transportation/space%20ships
`;
});

export default router;
