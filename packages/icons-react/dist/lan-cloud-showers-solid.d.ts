import React from 'react';

export interface LanCloudShowersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudShowersSolid: React.FC<LanCloudShowersSolidProps>;
export default LanCloudShowersSolid;
