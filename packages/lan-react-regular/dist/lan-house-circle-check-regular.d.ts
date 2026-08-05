import React from 'react';

export interface LanHouseCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseCircleCheckRegular(props: LanHouseCircleCheckRegularProps): React.ReactElement;
export default LanHouseCircleCheckRegular;
