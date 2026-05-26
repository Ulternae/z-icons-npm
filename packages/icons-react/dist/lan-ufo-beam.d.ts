import React from 'react';

export interface LanUfoBeamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUfoBeam: React.FC<LanUfoBeamProps>;
export default LanUfoBeam;
