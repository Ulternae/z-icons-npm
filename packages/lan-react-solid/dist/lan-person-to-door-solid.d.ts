import React from 'react';

export interface LanPersonToDoorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonToDoorSolid(props: LanPersonToDoorSolidProps): React.ReactElement;
export default LanPersonToDoorSolid;
