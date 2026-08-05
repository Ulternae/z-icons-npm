import React from 'react';

export interface LanTruckTowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckTowThin(props: LanTruckTowThinProps): React.ReactElement;
export default LanTruckTowThin;
