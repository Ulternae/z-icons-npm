import React from 'react';

export interface BruStumbleuponCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStumbleuponCircle: React.FC<BruStumbleuponCircleProps>;
export default BruStumbleuponCircle;
