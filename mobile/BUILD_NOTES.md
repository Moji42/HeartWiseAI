# HeartWise AI Mobile - Development Notes

## Build Configuration (Golden Path)
To ensure stability on Windows/Android, stick to these versions. Upgrading one often breaks others.

### `package.json` dependencies
- `react-native`: **0.75.4** (Do not upgrade to 0.76+ without migrating to New Architecture properly)
- `react-native-reanimated`: **3.15.1**
- `react-native-gesture-handler`: **2.18.1** (Avoid 2.20+)
- `react-native-screens`: **3.34.0**
- `react-native-safe-area-context`: **4.10.5**

### `android/build.gradle`
- `ndkVersion`: **"26.1.10909125"** (Critical for C++ modules)
- `kotlinVersion`: **"1.9.24"**

### `android/gradle.properties`
- `newArchEnabled=false` (Keep disabled for stability)
- `android.suppressUnsupportedCompileSdk=36` (Silences SDK 36 warnings)

## Running the App

### Android
1. Start an Emulator in Android Studio OR connect a physical device with USB Debugging enabled.
2. Run the bundler and app:
   ```bash
   cd mobile
   npm run android
   ```
   This will:
   - Start the Metro bundler in a new window.
   - Compile the native Java/Kotlin/C++ code.
   - Install the APK onto the connected device/emulator.
   - Launch the `com.heartwisemobile` activity.

### Troubleshooting
- **Clean Build**: If strange errors appear, always try cleaning first:
  ```bash
  cd mobile/android
  ./gradlew clean
  cd ..
  npm run android
  ```
- **ADB Not Found**: Add `%LOCALAPPDATA%\Android\Sdk\platform-tools` to your System PATH environment variable.
- **Metro Connection Issues**: Ensure the device is on the same Wi-Fi or run `adb reverse tcp:8081 tcp:8081` to forward the port.



