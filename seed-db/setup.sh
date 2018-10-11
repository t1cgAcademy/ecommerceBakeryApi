#!/bin/bash

set -e

mongoimport -d bakery -c products --file products.json --jsonArray
