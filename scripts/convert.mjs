import sharp from 'sharp';
import fs from 'fs';

const files = fs.readdirSync('public/images').filter(f => f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg'));
files.forEach(f => {
    sharp(`public/images/${f}`).webp({quality: 80}).toFile(`public/images/${f.split('.').slice(0, -1).join('.')}.webp`)
    .then(() => console.log(`Converted ${f}`))
    .catch(e => console.error(e));
});
