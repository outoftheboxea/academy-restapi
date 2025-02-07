# Dockerfile for a custom FTP server based on vsftpd
FROM fauria/vsftpd:latest

# Set environment variables for admin user and password.
# These can be overridden at runtime.
ENV FTP_USER=${FTP_USER:-admin}
ENV FTP_PASS=${FTP_PASS:-admin}

# Expose the standard FTP ports (control and passive ports)
EXPOSE 20 21 21000-21010

# (Optional) Copy in any custom configuration files if needed:
# COPY vsftpd.conf /etc/vsftpd.conf
