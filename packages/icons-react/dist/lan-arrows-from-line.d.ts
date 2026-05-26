import React from 'react';

export interface LanArrowsFromLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsFromLine: React.FC<LanArrowsFromLineProps>;
export default LanArrowsFromLine;
