import React from 'react';

export interface MinaChevronUpCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronUpCircle: React.FC<MinaChevronUpCircleProps>;
export default MinaChevronUpCircle;
