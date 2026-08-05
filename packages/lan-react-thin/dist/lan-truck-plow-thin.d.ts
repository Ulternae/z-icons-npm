import React from 'react';

export interface LanTruckPlowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckPlowThin(props: LanTruckPlowThinProps): React.ReactElement;
export default LanTruckPlowThin;
