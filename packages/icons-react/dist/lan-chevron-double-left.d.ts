import React from 'react';

export interface LanChevronDoubleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronDoubleLeft: React.FC<LanChevronDoubleLeftProps>;
export default LanChevronDoubleLeft;
