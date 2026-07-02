import React from 'react';

export interface CoreBatteryFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatteryFull(props: CoreBatteryFullProps): React.ReactElement;
export default CoreBatteryFull;
