import React from 'react';

export interface LanCloudMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMinusSolid: React.FC<LanCloudMinusSolidProps>;
export default LanCloudMinusSolid;
