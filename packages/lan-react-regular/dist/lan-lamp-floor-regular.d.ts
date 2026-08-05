import React from 'react';

export interface LanLampFloorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampFloorRegular(props: LanLampFloorRegularProps): React.ReactElement;
export default LanLampFloorRegular;
