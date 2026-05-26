import React from 'react';

export interface LanCloudMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMoon: React.FC<LanCloudMoonProps>;
export default LanCloudMoon;
