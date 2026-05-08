import React from 'react';

export interface MinaRewindCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindCircle: React.FC<MinaRewindCircleProps>;
export default MinaRewindCircle;
