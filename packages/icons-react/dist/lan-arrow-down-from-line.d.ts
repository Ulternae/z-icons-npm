import React from 'react';

export interface LanArrowDownFromLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowDownFromLine: React.FC<LanArrowDownFromLineProps>;
export default LanArrowDownFromLine;
