import React from 'react';

export interface LanCarAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarAltSolid(props: LanCarAltSolidProps): React.ReactElement;
export default LanCarAltSolid;
