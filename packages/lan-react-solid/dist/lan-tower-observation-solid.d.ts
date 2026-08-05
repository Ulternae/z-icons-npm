import React from 'react';

export interface LanTowerObservationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerObservationSolid(props: LanTowerObservationSolidProps): React.ReactElement;
export default LanTowerObservationSolid;
