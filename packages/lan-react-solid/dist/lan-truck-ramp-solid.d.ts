import React from 'react';

export interface LanTruckRampSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckRampSolid(props: LanTruckRampSolidProps): React.ReactElement;
export default LanTruckRampSolid;
