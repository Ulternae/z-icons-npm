import React from 'react';

export interface MinaDollarCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDollarCircle: React.FC<MinaDollarCircleProps>;
export default MinaDollarCircle;
