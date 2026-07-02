import React from 'react';

export interface CoreBatteryEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatteryEmpty(props: CoreBatteryEmptyProps): React.ReactElement;
export default CoreBatteryEmpty;
