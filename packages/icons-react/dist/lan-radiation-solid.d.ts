import React from 'react';

export interface LanRadiationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadiationSolid: React.FC<LanRadiationSolidProps>;
export default LanRadiationSolid;
