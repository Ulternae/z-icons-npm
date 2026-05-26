import React from 'react';

export interface LanDiceFiveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceFiveThin: React.FC<LanDiceFiveThinProps>;
export default LanDiceFiveThin;
