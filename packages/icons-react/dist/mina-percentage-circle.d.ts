import React from 'react';

export interface MinaPercentageCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageCircle: React.FC<MinaPercentageCircleProps>;
export default MinaPercentageCircle;
