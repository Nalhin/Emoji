import re
from collections import namedtuple, Counter
import json

with open('emoji.txt',  'rt', encoding='utf8') as file:
    emoji_raw = file.read()


emoji_entries = []
group = ''
subgroup = ''
skin = False

EmojiEntry = namedtuple(
    'EmojiEntry', ['status', 'emoji', 'name', 'skin', 'group', 'subGroup'])

for line in emoji_raw.splitlines()[32:]:
    if line == '# Status Counts':
        break
    if 'subtotal:' in line:
        continue
    if not line:
        continue
    if line.startswith('#'):
        if '# group:' in line:
            group = line.split(':')[-1].strip()
        if '# subgroup:' in line:
            subgroup = line.split(':')[-1].strip()
    if group == 'Component':
        continue
    if re.search('^[0-9A-F]{3,}', line):
        codepoint = line.split(';')[0].strip()
        status = line.split(';')[-1].split()[0].strip()
        if line[-1] == '#':
            if 'fully-qualified' in line:
                emoji = '#️⃣'
            else:
                emoji = '#⃣'
        else:
            emoji = line.split('#')[-1].split()[0].strip()
        if line[-1] == '#':
            name = '#'
        else:
            name = '_'.join(line.split('#')[-1]
                            [1:].split()[1:]).replace('_', ' ')
        if re.search('light skin tone', name):
            emoji_entries[-1]['skin'] = True
            continue
        if re.search('medium light skin tone', name) or re.search('medium skin tone', name) or re.search('medium skin tone', name) or re.search('dark skin tone', name):
            continue

        templine = EmojiEntry(
            status=status,
            emoji=emoji,
            name=name,
            skin=skin,
            group=group,
            subGroup=subgroup)
        if status == 'fully-qualified':
            emoji_entries.append(templine._asdict())


json = json.dumps(emoji_entries)
f = open("dict.json", "w")
f.write(json)
f.close()
