import React from 'react';

export interface BruStravaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStrava: React.FC<BruStravaProps>;
export default BruStrava;
