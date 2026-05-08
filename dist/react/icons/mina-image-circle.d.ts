import React from 'react';

export interface MinaImageCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaImageCircle: React.FC<MinaImageCircleProps>;
export default MinaImageCircle;
