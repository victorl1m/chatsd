#!/bin/bash

logFile='/var/www/html/chatsd/lhc_web/workflow.log'

while true; do
    lockFile='/var/www/html/chatsd/lhc_web/running-workflow.lock'

    if [ -e "$lockFile" ]; then
        echo "Already running"
    else
        touch "$lockFile"

        cd /var/www/html/chatsd/lhc_web && /usr/bin/php cron.php -s site_admin -c cron/workflow >> "$logFile"

        tail -n 1000 "$logFile" > "$logFile.tmp"
        mv "$logFile.tmp" "$logFile"

        rm -f "$lockFile"
    fi

    sleep 120
done
