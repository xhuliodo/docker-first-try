How to:

---How to set up---

+ First set up a file sharing container that connects with every other container:

docker create -it -v /shared-storage --name data-storage busybox

+ Depending on what environment we are going to use it, there is a .env file that has a few variables that can be customized depending on use-case

+ Then open a terminal in the directory you cloned from the github and docker-compose up

---Answers to questions---
Command that I've run for obtaining a selfsigned certificate is:
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout name-of-directory/test.key -out name-of-directory/test.crt

Command that I've run for obtaining dhparams:
	openssl dhparam -dsaparam -out name-of-directory/testdhparams.pem 4096
//I used the flag -dsaparam because without it, it was taking too long to generate the .pem file.
//I based my deciosion after reading stack exchange answer https://security.stackexchange.com/questions/95178/diffie-hellman-parameters-still-calculating-after-24-hours

For the php-fpm configuration I've chosen:
	Proccess management to be dynamic, assuming that this app will have a considerable amount of traffic at all times, since there needs to always be some number of servers listening and ready to execute a php script.
	Listen directive to be socket since it's more secure because Linux treats it as a file. Meaning it cannot be communicated by outside servers, only from the local file system.
	Other php configurations include: (Dedicating 2GB to php-fpm and each process takes up 10MB)
	pm.max_childre=100;
	pm.start_servers=20;
	pm.min_spare_servers=10;
	pm.max_spare_servers=20;
	pm.process_idle_timeout=10s;