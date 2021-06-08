#!/usr/bin/env sh

EXAMPLE_DIR="../../../../examples/https"
openssl req -x509 -nodes -newkey rsa:2048 -keyout server-key.pem -out server-cert.pem -days 3650 -subj "/C=CL/ST=RM/L=OpenTelemetryTest/O=Root/OU=Test/CN=ca"
cp ./server-*.pem "$EXAMPLE_DIR/"
