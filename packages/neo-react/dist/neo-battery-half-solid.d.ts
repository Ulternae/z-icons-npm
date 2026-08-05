import React from 'react';

export interface NeoBatteryHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBatteryHalfSolid(props: NeoBatteryHalfSolidProps): React.ReactElement;
export default NeoBatteryHalfSolid;
