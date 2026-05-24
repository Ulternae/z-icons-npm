import React from 'react';

export interface BruCreativeCommonsSamplingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCreativeCommonsSampling: React.FC<BruCreativeCommonsSamplingProps>;
export default BruCreativeCommonsSampling;
