import React from 'react';

export interface LanCarBurstSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBurstSolid(props: LanCarBurstSolidProps): React.ReactElement;
export default LanCarBurstSolid;
