import React from 'react';

export interface LanVolumeMediumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeMediumSolid: React.FC<LanVolumeMediumSolidProps>;
export default LanVolumeMediumSolid;
