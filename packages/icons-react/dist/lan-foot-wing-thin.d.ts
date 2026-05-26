import React from 'react';

export interface LanFootWingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootWingThin: React.FC<LanFootWingThinProps>;
export default LanFootWingThin;
