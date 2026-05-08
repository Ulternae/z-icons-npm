import React from 'react';

export interface MinaCornerUpRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerUpRight: React.FC<MinaCornerUpRightProps>;
export default MinaCornerUpRight;
