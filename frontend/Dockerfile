###################
# BUILD
###################

FROM node:18-alpine As build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build

###################
# EXPOSE
###################

FROM nginx:stable-alpine
RUN ls -la
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]