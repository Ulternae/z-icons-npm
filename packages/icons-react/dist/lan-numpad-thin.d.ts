import React from 'react';

export interface LanNumpadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNumpadThin: React.FC<LanNumpadThinProps>;
export default LanNumpadThin;
