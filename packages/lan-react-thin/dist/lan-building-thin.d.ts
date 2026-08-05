import React from 'react';

export interface LanBuildingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingThin(props: LanBuildingThinProps): React.ReactElement;
export default LanBuildingThin;
