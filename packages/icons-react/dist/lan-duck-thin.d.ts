import React from 'react';

export interface LanDuckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDuckThin: React.FC<LanDuckThinProps>;
export default LanDuckThin;
