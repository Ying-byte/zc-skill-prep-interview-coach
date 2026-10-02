# 面试教练

Standard **MCP + Skill** for any Agent Host (Cursor / Claude Code / Codex / Zhencheng).

面试准备清单与 STAR 打磨。

> One capability = one GitHub project. This folder is the sellable unit.

## Quick start

```bash
cd zc-skill-prep-interview-coach
npm i
node stdio_mcp_server.mjs
```

## Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "zc-skill-prep-interview-coach": {
      "command": "node",
      "args": ["/ABS/PATH/zc-skill-prep-interview-coach/stdio_mcp_server.mjs"]
    }
  }
}
```

Optional (use Zhencheng live tools):

```json
"env": {
  "ZC_AGENT_API_URL": "https://your-zhencheng-host",
  "ZC_MCP_TOKEN": "your-token"
}
```

## Tools

| Tool | Args |
|------|------|
| `coach_interview` | `query?` `jdText?` `profileText?` `location?` `notes?` `limit?` (number) |

## Skill

See `skills/zc-skill-prep-interview-coach/SKILL.md`.

## License

MIT — see `LICENSE`.
