import React from 'react';

export interface CoreBatteryQuarterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatteryQuarter(props: CoreBatteryQuarterProps): React.ReactElement;
export default CoreBatteryQuarter;
