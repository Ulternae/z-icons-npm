import React from 'react';

export interface LanPersonRunningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRunningSolid(props: LanPersonRunningSolidProps): React.ReactElement;
export default LanPersonRunningSolid;
