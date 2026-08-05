import React from 'react';

export interface LanBuildingsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildings(props: LanBuildingsProps): React.ReactElement;
export default LanBuildings;
