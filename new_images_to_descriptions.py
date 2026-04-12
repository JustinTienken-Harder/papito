import json

hash_to_d = json.load(open("hash_to_description.json", "r"))
img_to_h = json.load(open("new_img_to_hash.json", "r"))

img_to_d = {}
for img, h in img_to_h.items():
    if "src" == img[0:3]:
        img = img[3:]
    if h in hash_to_d:
        img_to_d[img] = hash_to_d[h]
    else:
        img_to_d[img] = ""

json.dump(img_to_d, open("new_img_to_description.json", "w"), indent=4)