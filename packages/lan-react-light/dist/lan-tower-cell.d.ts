import React from 'react';

export interface LanTowerCellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerCell(props: LanTowerCellProps): React.ReactElement;
export default LanTowerCell;
