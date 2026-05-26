import React from 'react';

export interface LanDaggerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDagger: React.FC<LanDaggerProps>;
export default LanDagger;
