import React from 'react';

export interface CoreBatteryHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBatteryHalf(props: CoreBatteryHalfProps): React.ReactElement;
export default CoreBatteryHalf;
