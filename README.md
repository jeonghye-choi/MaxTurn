# 송골매 SONGGOLMAE

> 부산대학교 제3회 창의융합SW해커톤

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

## Introduction

접근성이 높은 개방형 투자 플랫폼 '맥스턴'을 제작하여, 개인 투자자의 자기주도적 투자 전략 수립을 돕는 것이 목표입니다. 플랫폼 자체 커뮤니티의 활용으로 개인 투자자들의 투자 문화를 성숙화합니다. 빅데이터 분석 역량을 활용해 국민의 재산 증식에 기여하는 플랫폼으로 성장하겠습니다.

<br/>

1. **사용자가 매수, 매도의 기준을 직접 설정**

   - 매출액, 영업이익, 주가, 시가총액, PER, PBR, ROE, 현금흐름, 부채 비율 등의 지표가 있습니다.
   - 사용자가 주도적으로 매수, 매도 기준을 설정합니다.

2. **백테스팅 서비스를 제공**

   - 특정 기간을 설정하고, 사용자가 선택한 전략대로 과거 시뮬레이션을 진행합니다.
   - 과거 주가 데이터를 활용하여 불확실성을 줄이고, 자신만의 투자 전략을 수립합니다.
   - 실제처럼 실행하고 모든 결과를 기록해 분석합니다.
   - 전략의 성과를 평가합니다.

3. **플랫폼 자체 커뮤니티로 투자자간 정보 공유 서비스 제공**

   - 자신의 전략에 대한 다른 사람의 의견을 듣기 위해 백테스팅 데이터를 커뮤니티에 공유할 수 있습니다.
   - 커뮤니티에서 의견을 주고받으며 투자에 관한 다양한 지식을 쌓을 수 있습니다. 또한, 전략을 평가받고 부족한 것이나 잘못된 것을 고칠 수 있습니다.
   - 백테스팅으로 구한 수익률 데이터를, 다양한 측면을 반영한 수치로 분석하여 나에게 적합한 전략인지 아닌지 판가름 해줍니다.

<br/>

## Deployed in AWS EC2

- frontend - url: http://15.164.94.132:3000/backtest

- backend - django-rest-framework ngrok url: http://54.180.99.150:8080/apis/

- mongodb - atlas database: https://cloud.mongodb.com/v2/5f376e368a7cea3dc026163b#clusters

<br/>

## SONGGOLMAE Client

### Getting Started

**Prerequisite**

- node : `v16.13`

**Execute**

```bash
# 0. frontend 폴더에 들어가기
$ cd frontend

# 1. 설치하기
$ npm install

# 2. 실행하기
$ npm run start
#또는
$ yarn start
```

<br/>

## Pages

1. **Login & Home page**

   ![intro page3-01](https://user-images.githubusercontent.com/37919421/90789133-7f84a400-e341-11ea-8ed5-eb9b56e4d85c.png)

<br/>

2. **Community page**

   ![community main0820-01](https://user-images.githubusercontent.com/37919421/90789500-f5890b00-e341-11ea-867f-338e7f82565c.png)

<br/>

3. **My page**

   ![my page0817-01](https://user-images.githubusercontent.com/37919421/90789593-0afe3500-e342-11ea-8d6f-da898ca1508a.png)

## SONGGOLMAE Serve

**Installation**

OS X & Linux:

```sh
npm install my-crazy-module --save
```

Windows:

```sh
edit autoexec.bat
```

## Usage example

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.

_For more examples and usage, please refer to the [Wiki][wiki]._

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

## Release History

- 0.2.1
  - CHANGE: Update docs (module code remains unchanged)
- 0.2.0
  - CHANGE: Remove `setDefaultXYZ()`
  - ADD: Add `init()`
- 0.1.1
  - FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
- 0.1.0
  - The first proper release
  - CHANGE: Rename `foo()` to `bar()`
- 0.0.1
  - Work in progress

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the XYZ license. See `LICENSE` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
