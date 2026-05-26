import React from 'react';

export interface LanUfoBeamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUfoBeamThin: React.FC<LanUfoBeamThinProps>;
export default LanUfoBeamThin;
