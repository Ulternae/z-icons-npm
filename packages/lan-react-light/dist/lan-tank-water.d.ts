import React from 'react';

export interface LanTankWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTankWater(props: LanTankWaterProps): React.ReactElement;
export default LanTankWater;
