import React from 'react';

export interface MinaChevronRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronRight: React.FC<MinaChevronRightProps>;
export default MinaChevronRight;
