import React from 'react';

export interface BruHornbillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHornbill: React.FC<BruHornbillProps>;
export default BruHornbill;
