import React from 'react';

export interface LanPersonSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSignSolid(props: LanPersonSignSolidProps): React.ReactElement;
export default LanPersonSignSolid;
