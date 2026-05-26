import React from 'react';

export interface LanArrowDownLongProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowDownLong: React.FC<LanArrowDownLongProps>;
export default LanArrowDownLong;
