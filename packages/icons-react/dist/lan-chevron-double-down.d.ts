import React from 'react';

export interface LanChevronDoubleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronDoubleDown: React.FC<LanChevronDoubleDownProps>;
export default LanChevronDoubleDown;
