import React from 'react';

export interface LanRThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRThin: React.FC<LanRThinProps>;
export default LanRThin;
