import React from 'react';

export interface LanPersonWalkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonWalkingSolid(props: LanPersonWalkingSolidProps): React.ReactElement;
export default LanPersonWalkingSolid;
