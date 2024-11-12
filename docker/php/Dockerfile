FROM php:8.3.12-fpm

COPY php.ini /usr/local/etc/php/

# 必要なパッケージのインストールとDocker PHP Extensionsのインストール
RUN apt update \
    && apt install -y default-mysql-client zlib1g-dev libzip-dev unzip \
    && docker-php-ext-install pdo_mysql zip

# Composerのインストール
RUN curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer \
    && composer self-update

# Node.jsのインストール
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs npm

WORKDIR /var/www