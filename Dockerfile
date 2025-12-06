FROM docker.io/denoland/deno:latest

WORKDIR /app

COPY deno.json .
COPY static/ ./static/

EXPOSE 80

CMD ["deno", "task", "serve"]
