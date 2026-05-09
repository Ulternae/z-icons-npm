import React from 'react';

export interface MinaNineCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineCircle: React.FC<MinaNineCircleProps>;
export default MinaNineCircle;
