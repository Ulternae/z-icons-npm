import React from 'react';

export interface NeoBatteryHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBatteryHalf(props: NeoBatteryHalfProps): React.ReactElement;
export default NeoBatteryHalf;
