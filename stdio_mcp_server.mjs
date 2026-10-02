#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "prep-interview-coach",
  "titleZh": "面试教练",
  "summary": "面试准备清单与 STAR 打磨。",
  "tools": [
    "coach_interview"
  ],
  "proxyTools": {
    "coach_interview": "zc_assets_draft_prep"
  },
  "localKind": "draft"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
