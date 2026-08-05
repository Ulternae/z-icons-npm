import React from 'react';

export interface LanHouseCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseCircleCheck(props: LanHouseCircleCheckProps): React.ReactElement;
export default LanHouseCircleCheck;
