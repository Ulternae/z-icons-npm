import React from 'react';

export interface LanFaceViewfinderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceViewfinderSolid: React.FC<LanFaceViewfinderSolidProps>;
export default LanFaceViewfinderSolid;
