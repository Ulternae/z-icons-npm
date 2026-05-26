import React from 'react';

export interface LanJThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJThin: React.FC<LanJThinProps>;
export default LanJThin;
