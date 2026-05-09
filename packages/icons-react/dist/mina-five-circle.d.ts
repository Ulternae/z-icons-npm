import React from 'react';

export interface MinaFiveCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveCircle: React.FC<MinaFiveCircleProps>;
export default MinaFiveCircle;
