import React from 'react';

export interface LanHatBeachSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatBeachSolid: React.FC<LanHatBeachSolidProps>;
export default LanHatBeachSolid;
