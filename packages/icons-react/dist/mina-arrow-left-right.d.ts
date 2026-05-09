import React from 'react';

export interface MinaArrowLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowLeftRight: React.FC<MinaArrowLeftRightProps>;
export default MinaArrowLeftRight;
