import React from 'react';

export interface LanCarTiltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarTiltSolid: React.FC<LanCarTiltSolidProps>;
export default LanCarTiltSolid;
