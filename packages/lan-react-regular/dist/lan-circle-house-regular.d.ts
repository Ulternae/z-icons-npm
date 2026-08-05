import React from 'react';

export interface LanCircleHouseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHouseRegular(props: LanCircleHouseRegularProps): React.ReactElement;
export default LanCircleHouseRegular;
