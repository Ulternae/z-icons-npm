import React from 'react';

export interface MinaChevronDoubleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronDoubleDown: React.FC<MinaChevronDoubleDownProps>;
export default MinaChevronDoubleDown;
