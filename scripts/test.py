import random
import math
import yt_dlp

def pair(x, y):
    # Szudzik's pairing function
    return (y*y + x) if y > x else (x*x + x + y)

def unpair(z):
    q = math.floor(math.sqrt(z))
    l = z - q*q
    return [l, q] if l < q else [q, l - q]

def get_random():
    rand_num1 = math.floor(random.random() * 22)
    rand_num2 = rand_num1
    while rand_num2 == rand_num1:
        rand_num2 = math.floor(random.random() * 22)
    
    return pair(rand_num1, rand_num2) if rand_num1 < rand_num2 else pair(rand_num2, rand_num1)

def get_distribution(length):
    distribution = {i: 0 for i in range(length)}
    for _ in range(100):
        distribution[get_random() % length] += 1
    return distribution



playlist_url = "https://www.youtube.com/playlist?list=PLGM3_JDwj2ZQ"

ydl_opts = {
    "extract_flat": True,
    "quiet": True,
    "no_warnings": True,
    "ignoreerrors": True,
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    info = ydl.extract_info(playlist_url, download=False)

    video_ids = [
        entry["id"]
        for entry in info["entries"]
        if entry and entry.get("id")
    ]

print(video_ids)
print(len(video_ids))
