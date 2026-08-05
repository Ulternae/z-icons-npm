import React from 'react';

export interface CoreBatteryEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatteryEmptySolid(props: CoreBatteryEmptySolidProps): React.ReactElement;
export default CoreBatteryEmptySolid;
