import React from 'react';

export interface LanTankWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTankWaterThin(props: LanTankWaterThinProps): React.ReactElement;
export default LanTankWaterThin;
