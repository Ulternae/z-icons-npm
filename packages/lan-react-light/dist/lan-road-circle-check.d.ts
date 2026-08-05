import React from 'react';

export interface LanRoadCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadCircleCheck(props: LanRoadCircleCheckProps): React.ReactElement;
export default LanRoadCircleCheck;
