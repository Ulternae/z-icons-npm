import React from 'react';

export interface LanBuildingCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingCircleCheck(props: LanBuildingCircleCheckProps): React.ReactElement;
export default LanBuildingCircleCheck;
