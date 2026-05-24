import React from 'react';

export interface BruGetPocketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGetPocket: React.FC<BruGetPocketProps>;
export default BruGetPocket;
