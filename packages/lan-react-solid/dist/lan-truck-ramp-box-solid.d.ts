import React from 'react';

export interface LanTruckRampBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckRampBoxSolid(props: LanTruckRampBoxSolidProps): React.ReactElement;
export default LanTruckRampBoxSolid;
