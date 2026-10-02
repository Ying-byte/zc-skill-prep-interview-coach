---
name: zc-skill-prep-interview-coach
description: >-
  面试准备清单与 STAR 打磨。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-prep-interview-coach.
---

# 面试教练 · Skill

## When to use

- User asks for: 面试教练
- 面试准备清单与 STAR 打磨。

## Tools (`zc-skill-prep-interview-coach`)

| Tool | Args |
|------|------|
| `coach_interview` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
