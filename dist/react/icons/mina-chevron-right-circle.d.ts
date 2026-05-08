import React from 'react';

export interface MinaChevronRightCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronRightCircle: React.FC<MinaChevronRightCircleProps>;
export default MinaChevronRightCircle;
