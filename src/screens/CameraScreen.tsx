import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomView from '../components/CustomView';
import { Colors } from '../constants/Colors';
import UserSVG from '../assets/User';
import MessageSVG from '../assets/Message';
import GalleryIcons from '../assets/GalleryIcon';
import FlashSVG from '../assets/FlashSVG';
import FlipCameraIcon from '../assets/FlipCamera';
import DownArrow from '../assets/DownArrow';

const { width, height } = Dimensions.get('window');

const CameraScreen = () => {
  const devices = useCameraDevices();
  const [cameraType, setCameraType] = useState<"front" | "back">("front");
  const [flash, setFlash] = useState<"off" | "on">("off");
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const cameraRef = useRef<Camera>(null);


  useEffect(() => {
    const checkPermissions = async () => {
      const status = await Camera.requestCameraPermission();
      if (status !== "authorized") {
        console.warn("Camera permission not granted!");
      }
    };
    checkPermissions();
  }, []);



  const flipCamera = () => {
    setCameraType((prev) => (prev === "front" ? "back" : "front"));
  };

  const toggleFlash = () => {
    setFlash((prev) => (prev === "off" ? "on" : "off"));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto({ flash });
      console.log("Photo captured:", photo);
    }
  };

  const currentDevice = cameraType === "front" ? devices.front : devices.back;

  // if (!currentDevice) {
  //   return <Text style={styles.loadingText}>Loading Camera...</Text>;
  // }


  return (
    <CustomView>

      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <UserSVG />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addFriendButton}>
          <Text style={styles.addFriendText}>Add a Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MessageSVG />
        </TouchableOpacity>
      </View>

      {/* Camera View */}
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={currentDevice}
        isActive={true}
        photo={true}
        torch={flash}
      />

      {/* Capture Button */}
      <View style={styles.bottomControls}>
        <TouchableOpacity onPress={toggleFlash}>
          <FlashSVG />
        </TouchableOpacity>

        <View
          style={{
            // borderWidth: 1,
            width: 74,
            height: 74,
            borderColor: Colors.btnColor,
            borderRadius: 35,
            backgroundColor: 'white',
            borderWidth: 2,
          }}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture} />
        </View>

        <TouchableOpacity onPress={flipCamera}>
          <FlipCameraIcon />
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.historyButton}>
          <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: 4,
            borderRadius: 8,
            marginRight: 4,
          }}><GalleryIcons /></View>
          <Text style={styles.historyText}>History</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        marginTop: 10,
        alignItems: 'center',
      }}>
        <DownArrow />
      </View>
    </CustomView>
  )
}

export default CameraScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    width: width,
    height: width,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  addFriendButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  addFriendText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  controls: {
    // position: 'absolute',
    // bottom: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    borderWidth: 3,
  },
  bottomContainer: {
    // position: 'absolute',
    // bottom: 40,
    width: '100%',
    alignItems: 'center',
    marginTop: 40
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '600'
  },
  permissionContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: "white",
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
  },
  bottomControls: {
    // position: "absolute",
    // bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 40,
  },
});
