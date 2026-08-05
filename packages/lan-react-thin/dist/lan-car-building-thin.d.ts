import React from 'react';

export interface LanCarBuildingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBuildingThin(props: LanCarBuildingThinProps): React.ReactElement;
export default LanCarBuildingThin;
