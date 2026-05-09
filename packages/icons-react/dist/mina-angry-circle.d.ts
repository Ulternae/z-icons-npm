import React from 'react';

export interface MinaAngryCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAngryCircle: React.FC<MinaAngryCircleProps>;
export default MinaAngryCircle;
