const fs = require('fs');
const readline = require('readline');
const request = require('request');

const url = 'https://unicode.org/Public/emoji/12.0/emoji-test.txt';
const dest = './src/Module/data/emoji.json';
const vers = './src/Module/data/version.json';

let status, emoji, group, subgroup, name, version;
let skin = false;
let index = 0;
let end = false;

parseFile(url).then(data => {
    fs.writeFile(vers, JSON.stringify(version), error => {
        if (error) return console.log(error);
    });
    fs.writeFile(dest, JSON.stringify(data), error => {
        if (error) return console.log(error);
        else return console.log('Done!');
    });
});

function parseFile(url) {
    return new Promise((resolve, reject) => {
        const array = [];

        const rl = readline.createInterface({
            input: request.get(url).on('error', err => reject(err)),
        });

        rl.on('line', line => {
            parseEachLine(line, array);
        }).on('close', () => resolve(array));
    });
}

function parseEachLine(line, array) {
    if (index < 32) {
        if (line.includes('# Version:')) version = line.split(':')[1].trim();
        index++;
        return;
    } else {
        if (end) return;
        if (!line) return;
        if (line === '# Status Counts') {
            end = true;
            return;
        }
        if (line.includes('subtotal:')) return;
        if (line[0] === '#') {
            if (line.includes('# group:')) {
                group = line.replace('# group:', '').trim();
                return;
            }
            if (line.includes('# subgroup')) {
                subgroup = line.replace('# subgroup:', '').trim();
                return;
            }
        }
        if (group === 'component') return;
        if (/^[0-9A-F]{3,}/.test(line)) {
            status = line
                .split(';')[1]
                .split('#')[0]
                .trim();
            if (status !== 'fully-qualified') return;
            name = line
                .split('#')[1]
                .split(' ')
                .slice(2)
                .join(' ')
                .trim();
            if (line[line.length - 1] === '#') {
                if (line.includes('fully-qualified')) {
                    emoji = '#️⃣';
                    name = 'keycap: #';
                } else {
                    emoji = '#⃣ ';
                    name = 'keycap: #';
                }
            } else {
                emoji = line
                    .split('#')[1]
                    .split(' ')[1]
                    .trim();
            }
            if (name.includes('light skin tone')) {
                array[array.length - 1].skin = true;
                return;
            }
            if (/medium skin tone|dark skin tone/.test(name)) return;
        }
        const obj = {
            status: status,
            emoji: emoji,
            name: name,
            skin: skin,
            group: group,
            subgroup: subgroup,
        };
        array.push(obj);
    }
}
