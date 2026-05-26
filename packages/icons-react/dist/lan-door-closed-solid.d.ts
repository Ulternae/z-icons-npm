import React from 'react';

export interface LanDoorClosedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoorClosedSolid: React.FC<LanDoorClosedSolidProps>;
export default LanDoorClosedSolid;
