import React from 'react';

export interface LanTankWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTankWaterSolid(props: LanTankWaterSolidProps): React.ReactElement;
export default LanTankWaterSolid;
