import React from 'react';

export interface BruSquareLastfmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareLastfm: React.FC<BruSquareLastfmProps>;
export default BruSquareLastfm;
