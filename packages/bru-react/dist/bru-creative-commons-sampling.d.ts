import React from 'react';

export interface BruCreativeCommonsSamplingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCreativeCommonsSampling(props: BruCreativeCommonsSamplingProps): React.ReactElement;
export default BruCreativeCommonsSampling;
