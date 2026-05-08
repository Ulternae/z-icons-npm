import React from 'react';

export interface MinaChevronUpRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronUpRight: React.FC<MinaChevronUpRightProps>;
export default MinaChevronUpRight;
