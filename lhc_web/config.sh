mkdir cache
mkdir var
mkdir settings
mkdir var/storage
mkdir var/userphoto
mkdir var/storageform
mkdir var/storageadmintheme
mkdir var/botphoto
mkdir var/bottrphoto
mkdir var/storageinvitation
mkdir var/storagedocshare
mkdir var/storagetheme
mkdir var/tmpfiles
mkdir cache/cacheconfig
mkdir cache/compiledtemplates
mkdir cache/translations

npm i -f -g webpack-cli
npm i -f html-react-parser i18next socketcluster-client xwiper bootstrap.native howler i18next-http-backend wolfy87-eventemitter
cd design/defaulttheme/widget/wrapper && npm i -g -f webpack && npm i -f && npm run build
cd design/defaulttheme/widget/react-app && npm i -f && npm run build
cd design/defaulttheme/js/admin && npm i -f && npm run build

chown www-data -R cache/
chown www-data -R var/
chown www-data settings/
chmod -R 755 cache/
chmod 755 settings/
chmod -R 755 var/storage
chmod -R 755 var/userphoto
chmod -R 755 var/storageform
chmod -R 755 var/storageadmintheme
chmod -R 755 var/botphoto
chmod -R 755 var/bottrphoto
chmod -R 755 var/storageinvitation
chmod -R 755 var/storagedocshare
chmod -R 755 var/storagetheme
chmod -R 755 var/tmpfiles