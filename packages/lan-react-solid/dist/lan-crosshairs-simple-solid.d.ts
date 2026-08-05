import React from 'react';

export interface LanCrosshairsSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrosshairsSimpleSolid(props: LanCrosshairsSimpleSolidProps): React.ReactElement;
export default LanCrosshairsSimpleSolid;
