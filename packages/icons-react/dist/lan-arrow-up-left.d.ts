import React from 'react';

export interface LanArrowUpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowUpLeft: React.FC<LanArrowUpLeftProps>;
export default LanArrowUpLeft;
