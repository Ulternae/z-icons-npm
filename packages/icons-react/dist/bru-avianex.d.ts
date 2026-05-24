import React from 'react';

export interface BruAvianexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAvianex: React.FC<BruAvianexProps>;
export default BruAvianex;
