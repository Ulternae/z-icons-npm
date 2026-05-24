import React from 'react';

export interface BruBityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBity: React.FC<BruBityProps>;
export default BruBity;
