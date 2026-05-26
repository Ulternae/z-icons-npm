import React from 'react';

export interface LanDreidelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDreidelThin: React.FC<LanDreidelThinProps>;
export default LanDreidelThin;
