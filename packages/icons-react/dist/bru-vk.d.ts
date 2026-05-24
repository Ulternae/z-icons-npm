import React from 'react';

export interface BruVkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruVk: React.FC<BruVkProps>;
export default BruVk;
