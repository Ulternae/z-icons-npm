import React from 'react';

export interface LanBarProgressFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressFullThin: React.FC<LanBarProgressFullThinProps>;
export default LanBarProgressFullThin;
