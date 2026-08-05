import React from 'react';

export interface LanPersonDiggingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDiggingSolid(props: LanPersonDiggingSolidProps): React.ReactElement;
export default LanPersonDiggingSolid;
