import React from 'react';

export interface LanFaceLaughBeamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLaughBeam: React.FC<LanFaceLaughBeamProps>;
export default LanFaceLaughBeam;
