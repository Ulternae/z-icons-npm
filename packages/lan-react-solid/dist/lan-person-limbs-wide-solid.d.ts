import React from 'react';

export interface LanPersonLimbsWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonLimbsWideSolid(props: LanPersonLimbsWideSolidProps): React.ReactElement;
export default LanPersonLimbsWideSolid;
