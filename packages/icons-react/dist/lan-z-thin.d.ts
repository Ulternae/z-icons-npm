import React from 'react';

export interface LanZThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZThin: React.FC<LanZThinProps>;
export default LanZThin;
