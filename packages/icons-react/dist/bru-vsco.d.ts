import React from 'react';

export interface BruVscoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruVsco: React.FC<BruVscoProps>;
export default BruVsco;
