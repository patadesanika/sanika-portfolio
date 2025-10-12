import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const messagesFile = path.join(process.cwd(), 'messages.json')
    
    try {
      const data = fs.readFileSync(messagesFile, 'utf8')
      const messages = JSON.parse(data)
      return NextResponse.json({ messages })
    } catch (error) {
      return NextResponse.json({ messages: [] })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load messages' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Create message object
    const messageData = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      read: false
    }

    // File path for storing messages
    const messagesFile = path.join(process.cwd(), 'messages.json')
    
    // Read existing messages or create empty array
    let messages = []
    try {
      const existingData = fs.readFileSync(messagesFile, 'utf8')
      messages = JSON.parse(existingData)
    } catch (error) {
      // File doesn't exist, start with empty array
      messages = []
    }

    // Add new message
    messages.unshift(messageData) // Add to beginning

    // Keep only last 100 messages
    if (messages.length > 100) {
      messages = messages.slice(0, 100)
    }

    // Save messages
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2))

    // Log to console for immediate viewing
    console.log('\n=== NEW CONTACT FORM MESSAGE ===')
    console.log(`From: ${name} (${email})`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)
    console.log(`Time: ${new Date().toLocaleString()}`)
    console.log('================================\n')

    return NextResponse.json(
      { message: 'Message received successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Message saving error:', error)
    return NextResponse.json(
      { error: 'Failed to save message' },
      { status: 500 }
    )
  }
}