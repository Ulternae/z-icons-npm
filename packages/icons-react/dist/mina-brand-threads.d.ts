import React from 'react';

export interface MinaBrandThreadsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandThreads: React.FC<MinaBrandThreadsProps>;
export default MinaBrandThreads;
