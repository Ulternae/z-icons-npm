import React from 'react';

export interface BruLastfmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLastfm: React.FC<BruLastfmProps>;
export default BruLastfm;
