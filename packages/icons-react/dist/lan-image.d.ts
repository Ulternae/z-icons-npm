import React from 'react';

export interface LanImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImage: React.FC<LanImageProps>;
export default LanImage;
