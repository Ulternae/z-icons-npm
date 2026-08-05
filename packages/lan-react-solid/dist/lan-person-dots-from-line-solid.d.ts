import React from 'react';

export interface LanPersonDotsFromLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDotsFromLineSolid(props: LanPersonDotsFromLineSolidProps): React.ReactElement;
export default LanPersonDotsFromLineSolid;
