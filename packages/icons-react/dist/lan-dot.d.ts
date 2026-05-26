import React from 'react';

export interface LanDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDot: React.FC<LanDotProps>;
export default LanDot;
