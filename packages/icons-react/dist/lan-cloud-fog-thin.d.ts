import React from 'react';

export interface LanCloudFogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudFogThin: React.FC<LanCloudFogThinProps>;
export default LanCloudFogThin;
