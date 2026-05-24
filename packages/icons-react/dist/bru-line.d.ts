import React from 'react';

export interface BruLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLine: React.FC<BruLineProps>;
export default BruLine;
