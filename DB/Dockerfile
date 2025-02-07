# Dockerfile for a custom Postgres image
FROM postgres:latest

# Set default admin user and password; these can be overridden when running the container.
ENV POSTGRES_USER=${POSTGRES_USER:-admin}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-admin}

# Expose the default Postgres port
EXPOSE 5432
