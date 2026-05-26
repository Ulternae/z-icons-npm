import React from 'react';

export interface LanArrowsToDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToDot: React.FC<LanArrowsToDotProps>;
export default LanArrowsToDot;
