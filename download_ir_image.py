import urllib.request
import ssl
import os

ssl._create_default_https_context = ssl._create_unverified_context

urls = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1590494165263-91bfa94260bd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80"
]

output_path = "/Users/navnitnaman/FICS_WESBITE/public/assets/images/services/incident-response-final.jpg"

for url in urls:
    try:
        print(f"Trying {url}...")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            if response.getcode() == 200:
                with open(output_path, 'wb') as out_file:
                    out_file.write(response.read())
                print(f"Download successful from {url}")
                print(f"File size: {os.path.getsize(output_path)} bytes")
                break
    except Exception as e:
        print(f"Failed: {e}")
