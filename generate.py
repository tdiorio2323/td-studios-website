import os
from google import genai

# The script automatically finds the GEMINI_API_KEY environment variable
client = genai.Client()

response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents='Write a tagline for a modern web development studio.'
)

print(response.text)
