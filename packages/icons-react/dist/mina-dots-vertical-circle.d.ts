import React from 'react';

export interface MinaDotsVerticalCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalCircle: React.FC<MinaDotsVerticalCircleProps>;
export default MinaDotsVerticalCircle;
