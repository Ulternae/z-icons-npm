import React from 'react';

export interface LanCloudBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBoltThin: React.FC<LanCloudBoltThinProps>;
export default LanCloudBoltThin;
