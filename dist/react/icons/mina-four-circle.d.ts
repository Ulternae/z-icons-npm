import React from 'react';

export interface MinaFourCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourCircle: React.FC<MinaFourCircleProps>;
export default MinaFourCircle;
