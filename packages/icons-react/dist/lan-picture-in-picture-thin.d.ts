import React from 'react';

export interface LanPictureInPictureThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPictureInPictureThin: React.FC<LanPictureInPictureThinProps>;
export default LanPictureInPictureThin;
