import React from 'react';

export interface LanUfoBeamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUfoBeamSolid: React.FC<LanUfoBeamSolidProps>;
export default LanUfoBeamSolid;
