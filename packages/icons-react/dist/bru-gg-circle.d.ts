import React from 'react';

export interface BruGgCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGgCircle: React.FC<BruGgCircleProps>;
export default BruGgCircle;
