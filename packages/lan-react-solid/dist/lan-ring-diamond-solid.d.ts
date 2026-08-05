import React from 'react';

export interface LanRingDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRingDiamondSolid(props: LanRingDiamondSolidProps): React.ReactElement;
export default LanRingDiamondSolid;
