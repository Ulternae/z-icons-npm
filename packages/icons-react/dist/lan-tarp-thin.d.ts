import React from 'react';

export interface LanTarpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTarpThin: React.FC<LanTarpThinProps>;
export default LanTarpThin;
