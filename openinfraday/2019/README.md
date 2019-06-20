
# Open Infrastructure & Cloud Native Days Korea 2019

배포 방법은 저번과 비슷합니다.

## Prerequisits

- `Node.js LTS` 이상 권장
- `npm v6` 이상 권장
- `yarn v1.16` 이상 권장


1. Nodejs 및 npm 설치
[https://nodejs.org/ko/download/](Node JS 다운로드)

2. Yarn 설치하기 
`curl -o- -L https://yarnpkg.com/install.sh | bash
` 

3. 레포지토리 클론

3. 필요한 패키지 인스톨 `yarn install`

4. 프로젝트 빌드 `yarn build`

5. `cd build/`

6. `build` 디렉토리 내부에 있는 모든 스태틱 파일들이 홈페이지를 구성하는 파일들 입니다. endpoint를 `index.html` 로 설정하면됩니다.
