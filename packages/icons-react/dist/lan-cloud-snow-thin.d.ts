import React from 'react';

export interface LanCloudSnowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSnowThin: React.FC<LanCloudSnowThinProps>;
export default LanCloudSnowThin;
