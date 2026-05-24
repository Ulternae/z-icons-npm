import React from 'react';

export interface BruHackerrankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHackerrank: React.FC<BruHackerrankProps>;
export default BruHackerrank;
