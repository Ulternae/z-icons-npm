import React from 'react';

export interface LanTowerObservationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerObservation(props: LanTowerObservationProps): React.ReactElement;
export default LanTowerObservation;
