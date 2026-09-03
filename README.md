# Frontdoor CCTV - AI Security Camera Web Application

A modern, real-time CCTV security camera web application that turns any webcam into an intelligent surveillance monitor equipped with browser-based AI person detection.

---

## 🚀 Features

- **Live CCTV Video Stream**: High-performance webcam streaming with security camera HUD (timestamp, REC blip, FPS counter, camera switcher, and fullscreen mode).
- **Two Security Modes**:
  - 🏠 **At Home Mode (Disarmed)**: Quiet surveillance. Live camera feed and bounding boxes track movement passively without triggering alarm sounds or intrusive notifications.
  - 🚨 **Away Mode (Armed)**: High-alert security mode. Whenever a person enters the camera frame:
    - Sends native browser desktop notifications: **"Frontdoor CCTV: Person detected!"**
    - Sounds an audible security chime/alarm synthesized via the Web Audio API.
    - Captures an automated timestamped snapshot into the **Incident Log**.
    - Displays high-visibility visual alert flashing on the CCTV monitor.
- **On-Device AI Detection**: Runs Google TensorFlow.js with the lightweight `COCO-SSD` model directly inside the browser using WebGL hardware acceleration. Zero external video streams are sent to remote servers (100% private).
- **Notification Cooldown & Debounce**: Configurable cooldown timer (e.g. 10s) preventing continuous notification spam while an occupant remains in front of the camera.
- **Incident & Evidence Gallery**: Visual log of detected person events in Away mode with timestamps, confidence scores, full-screen viewing, and snapshot download.
- **Sensitivity & Sound Controls**: Adjust person detection confidence threshold (45% - 90%), toggle audio alarms, and test alarm sounds.

---

## 🛠️ Quick Start

### Option 1: Double-click launch (Windows)
Double-click `start.bat` in the project root folder.

### Option 2: Command Line
```bash
# Start the local development server
npm run dev
```

Then navigate to `http://localhost:5173` in your browser.

---

## 🔒 Permissions & Browser Setup

1. **Webcam Access**: When prompted by your browser, click **Allow** to enable camera streaming.
2. **Desktop Notifications**: Click the **Enable Desktop Notifications** button on the control panel to allow notifications when Away Mode triggers an alert.
