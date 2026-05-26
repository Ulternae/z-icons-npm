import React from 'react';

export interface LanFaceKissBeamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceKissBeamSolid: React.FC<LanFaceKissBeamSolidProps>;
export default LanFaceKissBeamSolid;
