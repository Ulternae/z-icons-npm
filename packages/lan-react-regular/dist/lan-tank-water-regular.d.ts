import React from 'react';

export interface LanTankWaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTankWaterRegular(props: LanTankWaterRegularProps): React.ReactElement;
export default LanTankWaterRegular;
