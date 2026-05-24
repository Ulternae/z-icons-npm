import React from 'react';

export interface BruSquareRedditProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareReddit: React.FC<BruSquareRedditProps>;
export default BruSquareReddit;
