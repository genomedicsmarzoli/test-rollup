<img src="https://www.genomedics.it/wp-content/uploads/2016/09/logo.png">

# CoreStack

### About CoreStack

**CoreStack** is the BI application providing the interface for the **CoreStack API**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

### Installation via Git

clone the git

``` sh
git clone http://git.genomedics.it/Genomedics/corestack.git
```

### Installation via unzip

install unzip if not present
(Ubuntu)
``` sh
sudo apt install unzip
```
or (CentOS)
``` sh
sudo yum install unzip
```

launch the unzip command and unzip the whole project

``` sh
unzip /path/to/corestack.zip
```

move into the installation folder

``` sh
cd /path/to/corestack
```
Install npm (Node Package Manager)

``` sh
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install nodejs
```
Install ng command globally
``` sh
npm install -g @angular/cli
```
Install all other required package
``` sh
npm install
```

## Build

Run `ng build shared && npm start` to run the project in dev mode. 
The build artifacts will be stored in the `dist/` directory. 
Use the `--prod` flag for a production build.
``` sh
ng build shared --prod
ng build --prod
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
