import React from 'react';

export interface CoreBatteryFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatteryFullSolid(props: CoreBatteryFullSolidProps): React.ReactElement;
export default CoreBatteryFullSolid;
