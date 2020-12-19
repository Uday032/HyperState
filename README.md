# Hyperstate-Challenge
HYPERSTATE CHALLENGE

## Build Instructions:
```
1. Go to hyperstate Directory.
2. Type npm install
3. TYPE npm start
4. Go to http://localhost:8080/
```

## Features Implemented: 
```

1. User can upload single and multiple images or videos(At max 10 Images or videos can be uploaded at a single time).
2. Image can be uploaded in (JPG|JPEG|PNG) format whereas video support all formats.
3. A processing bar will be shown while the video or image is uploading.
4. Fetched Images and Videos from the disk.
```

## Approach

1. Used Multer libraray to upload single and multiple images and videos.
2. Multer library has various options. It help us to add file extention filters, Storage where it should be saved, and how many files we can add in a single go.
3. Used Jquery/Ajax to do api calls from frontend.

