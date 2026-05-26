import React from 'react';

export interface LanTricycleAdultSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTricycleAdultSolid: React.FC<LanTricycleAdultSolidProps>;
export default LanTricycleAdultSolid;
