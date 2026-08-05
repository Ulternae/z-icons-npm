import React from 'react';

export interface LanPersonCaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCaneSolid(props: LanPersonCaneSolidProps): React.ReactElement;
export default LanPersonCaneSolid;
