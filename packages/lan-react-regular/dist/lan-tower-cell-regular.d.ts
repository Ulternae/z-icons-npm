import React from 'react';

export interface LanTowerCellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerCellRegular(props: LanTowerCellRegularProps): React.ReactElement;
export default LanTowerCellRegular;
