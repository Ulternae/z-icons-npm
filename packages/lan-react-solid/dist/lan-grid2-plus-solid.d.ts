import React from 'react';

export interface LanGrid2PlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid2PlusSolid(props: LanGrid2PlusSolidProps): React.ReactElement;
export default LanGrid2PlusSolid;
