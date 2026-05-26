import React from 'react';

export interface LanTowerObservationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerObservation: React.FC<LanTowerObservationProps>;
export default LanTowerObservation;
