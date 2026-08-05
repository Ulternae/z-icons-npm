import React from 'react';

export interface LanHouseBuildingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseBuildingThin(props: LanHouseBuildingThinProps): React.ReactElement;
export default LanHouseBuildingThin;
