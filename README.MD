# Testing With Mocha and Chai

## 1. How to setup Mocha and Chai

### Install mocha
```bash
npm install -g mocha
```

### Install chai
```bash
npm install --save chai
```
### Setup package.json

Add script to run test
```json
"scripts": {
    "test": "mocha"
}
"type": "module"
```
## 2. Structure of project

```
project/
├── src/                  # Source code directory
│   └── calculator.js     # Business logic
├── test/
│   ├── api.test.js       # API tests
│   └── unit.test.js      # Unit tests
├── package.json          # Project dependencies
└── package-lock.json

```

## 3. How to use my sample project
### 1. Clone Repository

```bash
git clone https://github.com/anhtu2808/TestingWithMocha.git
```
### 2. Install dependencies

```bash
npm install
```

### 3. Start Server

```bash
cd ./server
node server.js
```

### 4. Run Test
Open another terminal and run command
```bash
npm test
```
Or you can run specific test file
```bash
npm test -- test/YOUR_TEST_FILE.test.js
```


