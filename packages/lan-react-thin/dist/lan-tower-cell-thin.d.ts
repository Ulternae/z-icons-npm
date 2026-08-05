import React from 'react';

export interface LanTowerCellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerCellThin(props: LanTowerCellThinProps): React.ReactElement;
export default LanTowerCellThin;
