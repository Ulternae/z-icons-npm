import React from 'react';

export interface LanHeadsetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadsetSolid: React.FC<LanHeadsetSolidProps>;
export default LanHeadsetSolid;
