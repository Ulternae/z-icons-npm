import React from 'react';

export interface MinaFunnyCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFunnyCircle: React.FC<MinaFunnyCircleProps>;
export default MinaFunnyCircle;
