import React from 'react';

export interface BruBehanceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBehance: React.FC<BruBehanceProps>;
export default BruBehance;
