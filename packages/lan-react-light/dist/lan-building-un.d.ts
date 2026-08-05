import React from 'react';

export interface LanBuildingUnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingUn(props: LanBuildingUnProps): React.ReactElement;
export default LanBuildingUn;
