---
title: Introducing The Jres Specification
date: "2019-12-10T15:00:00-0700"
---

I have been making JSON/REST APIs for a while now, and have always been annoyed with the lack of opinionated structures of JSON/REST API responses. There are a few specs out there, including [Jsend](https://github.com/omniti-labs/jsend) (which this specification was inspired from) but lacked in some spaces for me.

Most importantly:

- Too much useless data being added to the response.
- Lack of opinionated structure for input field validation errors originating from the UI.
- Lack of focus on how the UI consumes this data in a modern web application.

[The Jres Specification](https://jres.dev) hopes to fix some of these issues. Jres is a specification on how to format JSON RESTful APi responses.

The spec itself is really quite simple, with only a few keys being required in the return JSON object. If you care to read more about it, you can check out the dedicated website below:

[The Jres Specification](https://jres.dev)
