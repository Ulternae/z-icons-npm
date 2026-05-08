import React from 'react';

export interface MinaPauseCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseCircle: React.FC<MinaPauseCircleProps>;
export default MinaPauseCircle;
