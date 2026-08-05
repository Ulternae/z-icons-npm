import React from 'react';

export interface LanBuildingUnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingUnThin(props: LanBuildingUnThinProps): React.ReactElement;
export default LanBuildingUnThin;
