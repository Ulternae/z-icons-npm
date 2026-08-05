import React from 'react';

export interface LanLandMineOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandMineOnRegular(props: LanLandMineOnRegularProps): React.ReactElement;
export default LanLandMineOnRegular;
