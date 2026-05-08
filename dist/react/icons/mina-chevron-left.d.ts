import React from 'react';

export interface MinaChevronLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronLeft: React.FC<MinaChevronLeftProps>;
export default MinaChevronLeft;
