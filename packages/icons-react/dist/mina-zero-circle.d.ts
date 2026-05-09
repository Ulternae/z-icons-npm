import React from 'react';

export interface MinaZeroCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroCircle: React.FC<MinaZeroCircleProps>;
export default MinaZeroCircle;
