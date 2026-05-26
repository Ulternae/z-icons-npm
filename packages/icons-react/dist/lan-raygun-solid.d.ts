import React from 'react';

export interface LanRaygunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRaygunSolid: React.FC<LanRaygunSolidProps>;
export default LanRaygunSolid;
