import React from 'react';

export interface CoreBatteryQuarterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatteryQuarterSolid(props: CoreBatteryQuarterSolidProps): React.ReactElement;
export default CoreBatteryQuarterSolid;
