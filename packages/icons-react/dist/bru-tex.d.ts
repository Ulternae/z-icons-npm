import React from 'react';

export interface BruTexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTex: React.FC<BruTexProps>;
export default BruTex;
