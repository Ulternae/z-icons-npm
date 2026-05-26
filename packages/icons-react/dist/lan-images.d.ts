import React from 'react';

export interface LanImagesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImages: React.FC<LanImagesProps>;
export default LanImages;
