import React from 'react';

export interface LanPersonSkatingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSkatingSolid(props: LanPersonSkatingSolidProps): React.ReactElement;
export default LanPersonSkatingSolid;
