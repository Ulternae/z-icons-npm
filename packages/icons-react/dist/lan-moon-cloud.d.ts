import React from 'react';

export interface LanMoonCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonCloud: React.FC<LanMoonCloudProps>;
export default LanMoonCloud;
