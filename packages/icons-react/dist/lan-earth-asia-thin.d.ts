import React from 'react';

export interface LanEarthAsiaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthAsiaThin: React.FC<LanEarthAsiaThinProps>;
export default LanEarthAsiaThin;
