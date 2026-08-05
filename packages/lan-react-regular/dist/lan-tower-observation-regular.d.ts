import React from 'react';

export interface LanTowerObservationRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerObservationRegular(props: LanTowerObservationRegularProps): React.ReactElement;
export default LanTowerObservationRegular;
