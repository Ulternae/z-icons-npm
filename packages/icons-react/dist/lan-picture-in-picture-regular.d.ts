import React from 'react';

export interface LanPictureInPictureRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPictureInPictureRegular: React.FC<LanPictureInPictureRegularProps>;
export default LanPictureInPictureRegular;
