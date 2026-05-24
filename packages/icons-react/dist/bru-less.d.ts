import React from 'react';

export interface BruLessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLess: React.FC<BruLessProps>;
export default BruLess;
