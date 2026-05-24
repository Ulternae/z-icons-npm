import React from 'react';

export interface BruRedditProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruReddit: React.FC<BruRedditProps>;
export default BruReddit;
