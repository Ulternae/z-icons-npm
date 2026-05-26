import React from 'react';

export interface LanPanoramaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanoramaThin: React.FC<LanPanoramaThinProps>;
export default LanPanoramaThin;
