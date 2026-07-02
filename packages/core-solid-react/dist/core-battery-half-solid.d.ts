import React from 'react';

export interface CoreBatteryHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatteryHalfSolid(props: CoreBatteryHalfSolidProps): React.ReactElement;
export default CoreBatteryHalfSolid;
