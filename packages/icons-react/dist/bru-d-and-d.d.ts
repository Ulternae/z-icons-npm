import React from 'react';

export interface BruDAndDProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDAndD: React.FC<BruDAndDProps>;
export default BruDAndD;
