import React from 'react';

export interface LanBicycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBicycle(props: LanBicycleProps): React.ReactElement;
export default LanBicycle;
