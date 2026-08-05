import React from 'react';

export interface LanChestDrawersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChestDrawersSolid(props: LanChestDrawersSolidProps): React.ReactElement;
export default LanChestDrawersSolid;
