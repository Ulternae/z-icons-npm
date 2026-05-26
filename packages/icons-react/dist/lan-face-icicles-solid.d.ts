import React from 'react';

export interface LanFaceIciclesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceIciclesSolid: React.FC<LanFaceIciclesSolidProps>;
export default LanFaceIciclesSolid;
