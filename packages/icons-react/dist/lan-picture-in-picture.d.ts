import React from 'react';

export interface LanPictureInPictureProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPictureInPicture: React.FC<LanPictureInPictureProps>;
export default LanPictureInPicture;
