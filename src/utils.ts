import fs from 'fs' ;
import path from 'path';

export async function read_inputfile(filename: string) {
    const data = await fs.promises.readFile("." +  path.sep + "input" + path.sep + filename, 'utf8');
    const lines : string[] = data.split("\n");
    return lines;
}