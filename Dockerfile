FROM node:lts-alpine

# タイムゾーンを設定
ENV TZ Asia/Tokyo

# 作業ディレクトリを設定
WORKDIR /app

# ローカルのファイルをコンテナにコピー
COPY vue-project ./

# パッケージ更新など

RUN apk update && apk add --no-cache xdg-utils
RUN npm install 
RUN npx storybook@latest init

# コンテナが起動した際にコマンド実行
CMD ["npm", "run", "dev", "--host"]