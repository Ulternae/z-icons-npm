import React from 'react';

export interface LanMoonCloudThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonCloudThin: React.FC<LanMoonCloudThinProps>;
export default LanMoonCloudThin;
