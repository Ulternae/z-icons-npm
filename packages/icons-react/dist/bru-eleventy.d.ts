import React from 'react';

export interface BruEleventyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruEleventy: React.FC<BruEleventyProps>;
export default BruEleventy;
