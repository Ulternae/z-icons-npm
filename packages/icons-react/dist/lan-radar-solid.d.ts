import React from 'react';

export interface LanRadarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadarSolid: React.FC<LanRadarSolidProps>;
export default LanRadarSolid;
