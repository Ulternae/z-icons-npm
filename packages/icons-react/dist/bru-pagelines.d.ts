import React from 'react';

export interface BruPagelinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPagelines: React.FC<BruPagelinesProps>;
export default BruPagelines;
