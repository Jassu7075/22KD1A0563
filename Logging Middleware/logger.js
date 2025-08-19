let sessionToken = null;

async function fakeAuthentication() {
    console.log("Logger: Trying to get a token...");
    await new Promise(done => setTimeout(done, 100));
    console.log("Logger: Got a fake token. Ready to log.");
    return "fake-token-12345";
}

export async function initializeLogger() {
    sessionToken = await fakeAuthentication();
}

export function Log(stack, level, pkg, msg) {
    if (!sessionToken) {
        console.error("LOGGING ERROR: Must call initializeLogger() first.");
        return;
    }

    const logEntry = {
        time: new Date().toLocaleTimeString(),
        stack: stack,
        level: level,
        package: pkg,
        message: msg,
    };

    if (level === "error" || level === "fatal") {
        console.error("LOG:", logEntry);
    } else if (level === "warn") {
        console.warn("LOG:", logEntry);
    } else {
        console.log("LOG:", logEntry);
    }
}