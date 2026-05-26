import React from 'react';

export interface LanCloudShowersHeavyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudShowersHeavy: React.FC<LanCloudShowersHeavyProps>;
export default LanCloudShowersHeavy;
