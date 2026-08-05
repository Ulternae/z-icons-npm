import React from 'react';

export interface LanTabletScreenButtonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletScreenButtonSolid(props: LanTabletScreenButtonSolidProps): React.ReactElement;
export default LanTabletScreenButtonSolid;
