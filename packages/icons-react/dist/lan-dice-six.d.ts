import React from 'react';

export interface LanDiceSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceSix: React.FC<LanDiceSixProps>;
export default LanDiceSix;
