import React from 'react';

export interface LanGrid3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid3Thin: React.FC<LanGrid3ThinProps>;
export default LanGrid3Thin;
