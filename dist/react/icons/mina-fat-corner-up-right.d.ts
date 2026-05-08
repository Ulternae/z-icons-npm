import React from 'react';

export interface MinaFatCornerUpRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFatCornerUpRight: React.FC<MinaFatCornerUpRightProps>;
export default MinaFatCornerUpRight;
