import React from 'react';

export interface LanGrid4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid4Thin: React.FC<LanGrid4ThinProps>;
export default LanGrid4Thin;
