import React from 'react';

export interface LanRulerTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerTriangleSolid: React.FC<LanRulerTriangleSolidProps>;
export default LanRulerTriangleSolid;
