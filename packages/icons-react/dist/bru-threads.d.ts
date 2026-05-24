import React from 'react';

export interface BruThreadsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruThreads: React.FC<BruThreadsProps>;
export default BruThreads;
