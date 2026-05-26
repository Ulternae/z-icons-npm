import React from 'react';

export interface LanDeerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDeerThin: React.FC<LanDeerThinProps>;
export default LanDeerThin;
