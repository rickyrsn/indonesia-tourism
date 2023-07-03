# Gunakan base image nginx
FROM nginx

# Salin semua file HTML ke dalam direktori default Nginx
COPY *.html /usr/share/nginx/html/

# Salin file CSS ke dalam direktori default Nginx
COPY custom.css /usr/share/nginx/html

# Salin file JavaScript ke dalam direktori default Nginx
COPY script.js /usr/share/nginx/html

# Salin file gambar ke dalam direktori default Nginx
# COPY images /usr/share/nginx/html/images

# Salin file konfigurasi Nginx kustom
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Jalankan Nginx pada foreground
CMD ["nginx", "-g", "daemon off;"]
