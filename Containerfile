FROM denoland/deno:latest

WORKDIR /app

COPY deno.json .
COPY static/ ./static/

EXPOSE 8000

CMD ["deno", "task", "serve"]
