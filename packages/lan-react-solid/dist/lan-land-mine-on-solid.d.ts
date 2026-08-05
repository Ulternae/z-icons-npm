import React from 'react';

export interface LanLandMineOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandMineOnSolid(props: LanLandMineOnSolidProps): React.ReactElement;
export default LanLandMineOnSolid;
