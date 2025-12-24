import urllib.request
import ssl
import os

ssl._create_default_https_context = ssl._create_unverified_context

# List of potential high-quality cybersecurity images
urls = [
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80", # Code/Hacking
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80", # Cyber lock
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"  # Matrix code
]

output_path = "/Users/navnitnaman/FICS_WESBITE/public/assets/images/services/incident-response-v3.jpg"

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
