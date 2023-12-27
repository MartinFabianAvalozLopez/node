import { startServer } from "./servers"

async function main() {
    const port: number = 4000;
    const app = await startServer();
    app.listen(port);
    console.log("App running on port", port)
}
main();

