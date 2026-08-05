import React from 'react';

export interface LanChestnutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChestnutSolid(props: LanChestnutSolidProps): React.ReactElement;
export default LanChestnutSolid;
