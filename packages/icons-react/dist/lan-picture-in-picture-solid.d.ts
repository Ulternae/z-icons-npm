import React from 'react';

export interface LanPictureInPictureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPictureInPictureSolid: React.FC<LanPictureInPictureSolidProps>;
export default LanPictureInPictureSolid;
