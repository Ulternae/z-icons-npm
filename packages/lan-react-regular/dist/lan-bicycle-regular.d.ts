import React from 'react';

export interface LanBicycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBicycleRegular(props: LanBicycleRegularProps): React.ReactElement;
export default LanBicycleRegular;
