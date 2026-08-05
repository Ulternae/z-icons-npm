import React from 'react';

export interface LanPersonDrowningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDrowningSolid(props: LanPersonDrowningSolidProps): React.ReactElement;
export default LanPersonDrowningSolid;
