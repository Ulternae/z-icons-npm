import React from 'react';

export interface MinaDangerCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerCircle: React.FC<MinaDangerCircleProps>;
export default MinaDangerCircle;
