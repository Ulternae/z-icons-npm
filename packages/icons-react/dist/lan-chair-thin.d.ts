import React from 'react';

export interface LanChairThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChairThin: React.FC<LanChairThinProps>;
export default LanChairThin;
