# Agent instructions

- Before declaring a connector's credentials invalid, retry the same connector with normal system access when restricted execution may block network or keyring access. For GitHub CLI, rerun `gh auth status` this way; restricted access previously produced a false invalid-token report.
- If the connector still fails, surface the issue and ask the user to authenticate again. Do not work around the failure through another tool, credential, or route.
