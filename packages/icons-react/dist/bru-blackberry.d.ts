import React from 'react';

export interface BruBlackberryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBlackberry: React.FC<BruBlackberryProps>;
export default BruBlackberry;
