import React from 'react';

export interface LanIntersectionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIntersection: React.FC<LanIntersectionProps>;
export default LanIntersection;
