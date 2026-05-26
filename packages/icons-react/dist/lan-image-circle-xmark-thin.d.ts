import React from 'react';

export interface LanImageCircleXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCircleXmarkThin: React.FC<LanImageCircleXmarkThinProps>;
export default LanImageCircleXmarkThin;
