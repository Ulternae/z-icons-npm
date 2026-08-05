import React from 'react';

export interface LanPersonDressSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDressSimpleSolid(props: LanPersonDressSimpleSolidProps): React.ReactElement;
export default LanPersonDressSimpleSolid;
