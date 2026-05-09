import React from 'react';

export interface MinaChevronDoubleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronDoubleUp: React.FC<MinaChevronDoubleUpProps>;
export default MinaChevronDoubleUp;
