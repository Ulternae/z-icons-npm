import React from 'react';

export interface LanFaceLaughBeamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLaughBeamSolid: React.FC<LanFaceLaughBeamSolidProps>;
export default LanFaceLaughBeamSolid;
