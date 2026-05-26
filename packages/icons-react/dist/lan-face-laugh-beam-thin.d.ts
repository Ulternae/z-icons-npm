import React from 'react';

export interface LanFaceLaughBeamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLaughBeamThin: React.FC<LanFaceLaughBeamThinProps>;
export default LanFaceLaughBeamThin;
