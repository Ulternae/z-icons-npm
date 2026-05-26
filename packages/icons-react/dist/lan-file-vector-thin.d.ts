import React from 'react';

export interface LanFileVectorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileVectorThin: React.FC<LanFileVectorThinProps>;
export default LanFileVectorThin;
