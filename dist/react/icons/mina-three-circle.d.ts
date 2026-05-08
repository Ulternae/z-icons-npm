import React from 'react';

export interface MinaThreeCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeCircle: React.FC<MinaThreeCircleProps>;
export default MinaThreeCircle;
