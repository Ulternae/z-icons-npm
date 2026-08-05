import React from 'react';

export interface LanBuildingNgoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingNgo(props: LanBuildingNgoProps): React.ReactElement;
export default LanBuildingNgo;
