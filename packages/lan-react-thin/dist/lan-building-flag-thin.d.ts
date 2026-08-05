import React from 'react';

export interface LanBuildingFlagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingFlagThin(props: LanBuildingFlagThinProps): React.ReactElement;
export default LanBuildingFlagThin;
