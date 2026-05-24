import React from 'react';

export interface BruHipsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHips: React.FC<BruHipsProps>;
export default BruHips;
