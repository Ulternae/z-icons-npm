import React from 'react';

export interface BruServicestackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruServicestack: React.FC<BruServicestackProps>;
export default BruServicestack;
