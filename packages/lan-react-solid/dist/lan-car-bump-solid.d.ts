import React from 'react';

export interface LanCarBumpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBumpSolid(props: LanCarBumpSolidProps): React.ReactElement;
export default LanCarBumpSolid;
