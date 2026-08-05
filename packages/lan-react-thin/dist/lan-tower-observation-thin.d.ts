import React from 'react';

export interface LanTowerObservationThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerObservationThin(props: LanTowerObservationThinProps): React.ReactElement;
export default LanTowerObservationThin;
