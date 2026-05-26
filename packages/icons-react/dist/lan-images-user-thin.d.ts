import React from 'react';

export interface LanImagesUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagesUserThin: React.FC<LanImagesUserThinProps>;
export default LanImagesUserThin;
