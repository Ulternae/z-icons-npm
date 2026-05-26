import React from 'react';

export interface LanVolumeLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeLowSolid: React.FC<LanVolumeLowSolidProps>;
export default LanVolumeLowSolid;
