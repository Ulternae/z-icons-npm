import React from 'react';

export interface LanGrid2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid2Thin: React.FC<LanGrid2ThinProps>;
export default LanGrid2Thin;
