import React from 'react';

export interface LanCloudBoltMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBoltMoon: React.FC<LanCloudBoltMoonProps>;
export default LanCloudBoltMoon;
