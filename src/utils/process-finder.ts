import {getProcesses} from 'node-process-windows';
import * as fs_promises from 'fs/promises';
import * as fs from 'fs'



export default class ProcessFinder{
    public async obterProcessos(): Promise<void> {
       try {
        await getProcesses(async (err, processes) => {
            const json =  await  JSON.stringify(processes, null, 2);
    
            await !fs.existsSync(".\\cache") && fs.mkdirSync(".\\cache");
            await fs_promises.rm(".\\cache\\cache.json", {force: true});    

            await fs_promises.writeFile(".\\cache\\cache.json", json, {encoding: 'utf8'});
        });
       }  catch (error) {
       console.error("Error retrieving processes:", error);
    }       
      }
}

