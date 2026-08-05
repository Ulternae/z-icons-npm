import React from 'react';

export interface LanCartCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartCircleCheck(props: LanCartCircleCheckProps): React.ReactElement;
export default LanCartCircleCheck;
