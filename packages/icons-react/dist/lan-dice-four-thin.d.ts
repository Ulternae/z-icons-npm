import React from 'react';

export interface LanDiceFourThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceFourThin: React.FC<LanDiceFourThinProps>;
export default LanDiceFourThin;
