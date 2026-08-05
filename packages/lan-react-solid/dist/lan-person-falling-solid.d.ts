import React from 'react';

export interface LanPersonFallingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFallingSolid(props: LanPersonFallingSolidProps): React.ReactElement;
export default LanPersonFallingSolid;
