import React from 'react';

export interface LanTowerCellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerCellSolid(props: LanTowerCellSolidProps): React.ReactElement;
export default LanTowerCellSolid;
