import React from 'react';

export interface BruCreativeCommonsRemixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCreativeCommonsRemix: React.FC<BruCreativeCommonsRemixProps>;
export default BruCreativeCommonsRemix;
