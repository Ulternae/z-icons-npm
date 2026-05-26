import React from 'react';

export interface LanArrowsCrossThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsCrossThin: React.FC<LanArrowsCrossThinProps>;
export default LanArrowsCrossThin;
