import React from 'react';

export interface BruYCombinatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruYCombinator: React.FC<BruYCombinatorProps>;
export default BruYCombinator;
