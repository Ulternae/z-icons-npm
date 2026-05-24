import React from 'react';

export interface BruMixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMix: React.FC<BruMixProps>;
export default BruMix;
