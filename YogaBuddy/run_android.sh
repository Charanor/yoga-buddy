#!/bin/bash
rm -rf ./android/app/build
"D:\Android\sdk\platform-tools\adb" reverse tcp:8081 tcp:8081
react-native run-android
$SHELL