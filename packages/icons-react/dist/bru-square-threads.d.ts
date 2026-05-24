import React from 'react';

export interface BruSquareThreadsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareThreads: React.FC<BruSquareThreadsProps>;
export default BruSquareThreads;
