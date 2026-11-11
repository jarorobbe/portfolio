# Agent instructions

- Before declaring a connector's credentials invalid, retry the same connector with normal system access when restricted execution may block network or keyring access. For GitHub CLI, rerun `gh auth status` this way; restricted access previously produced a false invalid-token report.
- If the connector still fails, surface the issue and ask the user to authenticate again. Do not work around the failure through another tool, credential, or route.
- Use the `$pr` skill (`/Users/jaro/.agents/skills/pr/SKILL.md`) when writing a pull request body.
- Write pull request titles in semantic commit style: `type(scope): description`, with the scope optional (for example, `docs: add agent guidance`).
