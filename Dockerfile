FROM frolvlad/alpine-glibc AS dev
ARG DENO_INSTALL="/usr"
ARG BUN_INSTALL="/usr"
RUN apk update \
    && apk add curl unzip bash openssh-client git nodejs npm postgresql-client \
    && curl -fsSL https://deno.land/x/install/install.sh | sh \
    && curl -fsSL https://bun.sh/install | bash
