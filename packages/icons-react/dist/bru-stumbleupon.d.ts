import React from 'react';

export interface BruStumbleuponProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStumbleupon: React.FC<BruStumbleuponProps>;
export default BruStumbleupon;
