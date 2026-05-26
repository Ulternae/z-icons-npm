import React from 'react';

export interface LanCloudsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClouds: React.FC<LanCloudsProps>;
export default LanClouds;
