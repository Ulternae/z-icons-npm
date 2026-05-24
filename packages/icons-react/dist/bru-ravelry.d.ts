import React from 'react';

export interface BruRavelryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRavelry: React.FC<BruRavelryProps>;
export default BruRavelry;
