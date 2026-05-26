import React from 'react';

export interface LanCloudShowersHeavyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudShowersHeavyThin: React.FC<LanCloudShowersHeavyThinProps>;
export default LanCloudShowersHeavyThin;
