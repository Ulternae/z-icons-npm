import React from 'react';

export interface LanOrnamentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOrnamentThin: React.FC<LanOrnamentThinProps>;
export default LanOrnamentThin;
