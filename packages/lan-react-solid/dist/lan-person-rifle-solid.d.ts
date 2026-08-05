import React from 'react';

export interface LanPersonRifleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRifleSolid(props: LanPersonRifleSolidProps): React.ReactElement;
export default LanPersonRifleSolid;
