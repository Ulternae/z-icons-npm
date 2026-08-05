import React from 'react';

export interface LanCubesStackedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCubesStackedSolid(props: LanCubesStackedSolidProps): React.ReactElement;
export default LanCubesStackedSolid;
