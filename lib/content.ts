import fs from 'fs/promises';
import path from 'path';

const CONTENT_FILE = path.join(process.cwd(), 'data', 'content.json');

export async function getContent() {
  try {
    const fileContent = await fs.readFile(CONTENT_FILE, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Failed to load content:', error);
    // Return default content if file doesn't exist
    return null;
  }
}

