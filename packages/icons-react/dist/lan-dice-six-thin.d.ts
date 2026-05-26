import React from 'react';

export interface LanDiceSixThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceSixThin: React.FC<LanDiceSixThinProps>;
export default LanDiceSixThin;
