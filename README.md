
# 메모
state, props, context(state managing), react-router-dom, FontAwsome


### json-server
mock json server 를 만들도록 도와주는 패키지

#### 설정
package.json 파일에 json-server 를 run 할 방법을 정해야함
```json

  "scripts": {
    ...
   "server": "json-server --watch db.json --port 5000",
    ...
  },
```

이런식으로 db.json 파일을 바라보게 만듦

#### run
```bash
# 이렇게 mock server 를 실행할 수 있음.
$> npm run server 
# \{^_^}/ hi!

#   Loading db.json
#   Done

#   Resources
#   http://localhost:5000/feedback

#   Home
#   http://localhost:5000
```

#### 활용
일반 api 요청과 같이 get, post, delete 모두 사용이 가능하다.
body 에 x-www.form-urlencoded 타입으로 객체를 넣어서 보내면 post되며, delete 시에는 path variable 로 id 를 넣어줘야한다.

ex)postman 에서 http://localhost:5000/feedback 로 확인

### concurrently
터미널에 여러 커맨드를 동시에 구동시킬 수 있도록 도와주는 패키지

#### 설정
두개의 커멘드를 동시에 구동시켜야하는 이유는 react-app 을 올리는 서버와 mock 서버를 동시에 구동시켜야 하기 때문이다.

```json
"scripts": {
    "server": "json-server --watch db.json --port 5000",
    "dev": "concurrently \"npm run server\" \"npm start\""
}
```
#### run

```bash
$> npm run dev
```

#### 활용
...

