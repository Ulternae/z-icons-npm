import React from 'react';

export interface BruWixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWix: React.FC<BruWixProps>;
export default BruWix;
