function logStatus(status: "loading" | "success" | "error"): void {
  if (status === "loading" || "success") {
    console.log("Status:", status);
  } else {
    console.log("Unknown status");
  }
}

logStatus("loading");
