import React from 'react';

export interface LanTowerObservationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerObservationSolid: React.FC<LanTowerObservationSolidProps>;
export default LanTowerObservationSolid;
