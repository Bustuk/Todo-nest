# Vue-nest Todo

Very simple todo app which can be run in 3 ways:

### Locally

Run mysql db locally and fill config in backend/.env according to your local mysql cofnig
```env
DB_HOST='localhost'
DB_PASSWORD='example'
DB_USER='root'
DB_NAME='db'
DB_PORT='3306'
```

Then run in separate terminals
```bash
cd frontend && npm ci && npm run dev
cd backend && npm ci && npm run start
```

Navigate to http://localhost:5173

### Docker

```bash
docker-compose up
```

Navigate to http://localhost:1337

### Kubernetes

```bash
kubectl apply -R -f k8s/
```

Navigate to http://localhost:8080

### ! If you use minkube
```
minikube service frontend --url
```
And navigate to the url provided by minikube