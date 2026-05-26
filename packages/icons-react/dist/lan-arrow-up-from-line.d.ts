import React from 'react';

export interface LanArrowUpFromLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowUpFromLine: React.FC<LanArrowUpFromLineProps>;
export default LanArrowUpFromLine;
