import React from 'react';

export interface BruArtstationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruArtstation: React.FC<BruArtstationProps>;
export default BruArtstation;
