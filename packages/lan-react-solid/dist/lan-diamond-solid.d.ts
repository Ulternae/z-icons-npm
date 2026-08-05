import React from 'react';

export interface LanDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamondSolid(props: LanDiamondSolidProps): React.ReactElement;
export default LanDiamondSolid;
