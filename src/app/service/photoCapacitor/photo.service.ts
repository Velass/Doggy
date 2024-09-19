import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    var imageUrl = image.webPath;
    return imageUrl
  }

  selectPhoto = async () => {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 90
    })
    return image
  }

  selectOrTakePhoto = async () => {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      quality: 90
    })
    return image
  }

  constructor() { }
}
