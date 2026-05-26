import React from 'react';

export interface LanMangoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMangoThin: React.FC<LanMangoThinProps>;
export default LanMangoThin;
