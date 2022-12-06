# Static Rendering

## Steps to Benchmark

1. Run `yarn export` to export the static NextJS app. Output destination `./out`.
2. Run `python -m http.server 3001` to start serving the static NextJS app.
3. Run benchmark `node benchmark.js localhost:3001 <number-of-times>`. The benchmark runs will get saved in `./benchmarkOutput`.
