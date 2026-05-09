import React from 'react';

export interface MinaAsteriskCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskCircle: React.FC<MinaAsteriskCircleProps>;
export default MinaAsteriskCircle;
