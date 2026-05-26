import React from 'react';

export interface LanTowerObservationThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerObservationThin: React.FC<LanTowerObservationThinProps>;
export default LanTowerObservationThin;
