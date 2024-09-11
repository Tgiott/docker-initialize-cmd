import { exec } from "child_process";
import * as fs from "fs";

import ProcessFinder from "./utils/process-finder";
import Process from "./utils/process";

async function runDocker(): Promise<void> {
  const dockerExecutablePath =
    "C:\\Program Files\\Docker\\Docker\\Docker Desktop.exe"; // Use platform-independent path if possible
  const processName = "Docker Desktop";

  try {
    const dockerProcessArray: Process[] = await readProcess();

    const dockerProcess = await dockerProcessArray.find(
      (process) => process.processName === processName,
    );
    if (dockerProcess) {
      console.log("Docker is Running, not to do....");
      console.log(
        `Docker Process:{ pid: ${dockerProcess.pid}  processName: ${
          dockerProcess.processName
        }  mainWindowTitle: ${dockerProcess.mainWindowTitle || "none"}}`,
      );
    } else {
      console.log("Docker is not running, openning...");

      // await exec(
      //   `start /MIN "" "${dockerExecutablePath}"`,
      //   { windowsHide: true },
      //   function (err) {
      //     //console.log(err);
      //   },
      // );
      console.log(`Docker Desktop started successfully.}`);
    }
  } catch (error) {
    //  console.log(error)
  }
}

async function readProcess(): Promise<Process[]> {
  try {
    const processes = await new ProcessFinder();
    await processes.obterProcessos();
    const jsonData = await fs.readFileSync(".\\cache\\cache.json", "utf8");
    return await JSON.parse(jsonData);
  } catch (err) {
    //  console.log(err);
  }
  return [];
}

runDocker();
