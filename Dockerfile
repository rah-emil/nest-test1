FROM node:18-alpine

ARG USER=nest_test1
ARG USERID=1000

WORKDIR /app

RUN deluser --remove-home node \
&& adduser -u ${USERID} -D ${USER} \
&& chown -R ${USER}:${USER} /app

RUN apk add --no-cache nginx supervisor python3 make g++

USER ${USER}

CMD ["tail", "-f", "/dev/null"]
