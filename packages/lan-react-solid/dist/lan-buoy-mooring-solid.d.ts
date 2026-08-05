import React from 'react';

export interface LanBuoyMooringSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuoyMooringSolid(props: LanBuoyMooringSolidProps): React.ReactElement;
export default LanBuoyMooringSolid;
