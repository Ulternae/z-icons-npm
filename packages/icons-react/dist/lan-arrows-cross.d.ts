import React from 'react';

export interface LanArrowsCrossProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsCross: React.FC<LanArrowsCrossProps>;
export default LanArrowsCross;
