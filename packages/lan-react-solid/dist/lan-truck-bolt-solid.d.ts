import React from 'react';

export interface LanTruckBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckBoltSolid(props: LanTruckBoltSolidProps): React.ReactElement;
export default LanTruckBoltSolid;
