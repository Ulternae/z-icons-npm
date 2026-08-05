import React from 'react';

export interface LanSpiralSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpiralSolid(props: LanSpiralSolidProps): React.ReactElement;
export default LanSpiralSolid;
