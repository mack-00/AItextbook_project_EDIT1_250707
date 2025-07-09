# 씨마스 AI 교과서 (CMAS AI Textbook)

본 프로젝트는 **AI 기반 디지털 교과서 콘텐츠**를 웹페이지 형식으로 구성하여 형상관리(Git)를 통해 관리하기 위한 저장소입니다.  
AI 교과서의 각 단원별 HTML 콘텐츠, 정적 자산(css, js, img 등), 인터랙션 리소스(mp3, widget 등)를 포함하고 있습니다.

---

## 📁 디렉토리 구조

디렉토리는 학년/학기/차시 기준으로 구성되어 있습니다.

```
HighScholl-1/
├── 1-1/                  # 고등학교 1학년 1학기
├── 1-2/                  # 고등학교 1학년 2학기
...
HighScholl-5/
├── 2-2/                  # 고등학교 5학년 (확장용 구조)
```

각 하위 폴더는 다음과 같은 구조를 가집니다:

```
1-1/
├── H-xxx.html            # 콘텐츠 본문 (단원별 HTML)
├── css/                  # 스타일 시트
├── js/                   # 스크립트
├── img/                  # 이미지
├── asset/, corp/, mp3/   # 일부 콘텐츠용 보조 리소스 폴더
```

> ⚠️ 주의: `HighScholl` 오타는 일부 폴더명에서 유지된 상태입니다 (의도된 경우가 아니라면 `HighSchool`로 수정 권장).

---

## 🧠 주요 특징

- **정적 웹 기반 구성**: HTML, CSS, JS 기반의 오프라인 호환 학습 콘텐츠
- **단원별 파일 분리**: 각 단원은 독립된 HTML로 제공되어 접근성과 유지보수가 용이함
- **다양한 리소스 연동**: 이미지, 오디오, 위젯 포함한 멀티미디어 콘텐츠 구성

---

## 🚀 사용 방법

1. 저장소 복제
```bash
git clone [https://github.com/[YOUR_ID]/[REPO_NAME]](https://github.com/mack-00/AItextbook_project_EDIT1_250707.git
```

2. 로컬에서 학습 콘텐츠 실행
```bash
cd HighScholl-1/1-1
open H-1-01.html    # macOS 기준, 또는 브라우저에서 직접 열기
```

3. 웹서버에서 서비스할 경우:
- Nginx, Apache, GitHub Pages 등으로 정적 호스팅 가능
- 루트 디렉토리는 `/HighScholl-x/x-x/` 중 원하는 학기 단위를 지정

---


