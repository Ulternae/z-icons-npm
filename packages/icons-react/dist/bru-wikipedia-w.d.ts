import React from 'react';

export interface BruWikipediaWProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWikipediaW: React.FC<BruWikipediaWProps>;
export default BruWikipediaW;
