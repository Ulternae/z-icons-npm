import React from 'react';

export interface LanTabletButtonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletButtonSolid(props: LanTabletButtonSolidProps): React.ReactElement;
export default LanTabletButtonSolid;
