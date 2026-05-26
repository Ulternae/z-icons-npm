import React from 'react';

export interface LanTowerObservationRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerObservationRegular: React.FC<LanTowerObservationRegularProps>;
export default LanTowerObservationRegular;
