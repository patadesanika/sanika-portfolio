import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'SanikaPatade_SoftwareEngineer_Resume.pdf')
  const fileBuffer = fs.readFileSync(filePath)
  
  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="SanikaPatade_SoftwareEngineer_Resume.pdf"',
    },
  })
}