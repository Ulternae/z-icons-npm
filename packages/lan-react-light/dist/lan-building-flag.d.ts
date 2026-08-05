import React from 'react';

export interface LanBuildingFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingFlag(props: LanBuildingFlagProps): React.ReactElement;
export default LanBuildingFlag;
