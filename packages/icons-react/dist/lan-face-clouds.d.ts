import React from 'react';

export interface LanFaceCloudsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceClouds: React.FC<LanFaceCloudsProps>;
export default LanFaceClouds;
