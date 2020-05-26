# nfc.did.ai

This repo contains nfc experiments, and some custom tooling for working with tangem nfc cards.

None of this is endorsed by tangem / any code is unoffocial / alpha level stuff... for reference only. DO NOT USE IN PRODUCTION.

Storing seed values in querystrings is fundamentally not safe, and is used only for demonstration purposes.

For example: https://nfc.did.ai/nxp?seed=7052adea8f9823817065456ecad5bf24dcd31a698f7bc9a0b5fc170849af4226

DO NOT DO THIS IN PRODUCTION.

### Testing with Web NFC

- https://web.dev/nfc/
- Renew URL: https://developers.chrome.com/origintrials/#/registration/1022457852901457921

```
<meta http-equiv="origin-trial" content="TOKEN_GOES_HERE">
```

```
Origin-Trial: TOKEN_GOES_HERE
```

Token:

```
Av5oeCzgX0e5q307CqjgsBRAcLMQp5MdLr845VeyB04tFYh5hAQ0mZC0jZ3Bu7ychUpIcI4sKcKDyfJ2mkxA+g0AAABZeyJvcmlnaW4iOiJodHRwczovL2RpZC5haTo0NDMiLCJmZWF0dXJlIjoiV2ViTkZDIiwiZXhwaXJ5IjoxNTkxNTUxNTAyLCJpc1N1YmRvbWFpbiI6dHJ1ZX0=
```
