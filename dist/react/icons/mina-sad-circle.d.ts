import React from 'react';

export interface MinaSadCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSadCircle: React.FC<MinaSadCircleProps>;
export default MinaSadCircle;
