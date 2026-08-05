import React from 'react';

export interface LanTabletRuggedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletRuggedSolid(props: LanTabletRuggedSolidProps): React.ReactElement;
export default LanTabletRuggedSolid;
